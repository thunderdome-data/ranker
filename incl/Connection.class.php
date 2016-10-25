<?php
$config = array('db_name' => $_ENV['DB_NAME'],
                'username' => $_ENV['USERNAME'],
                'password' => $_ENV['PASSWORD']);

class Connection {
    private $__type;
    public $con;
    private $__db;

    private $__credentials = array (
                                    $config['db_name'] => array(
                                                    "username" => $config['username'],
                                                    "password" => $config['password']
                                                    )
                                    );
    private $__credential;

    public function __construct($type=0,$db=0) {
        if(!$type) {

            echo "Usage: Connection(<type>,<db>=0) where type is type of connection and optional db is the database to connect to";
        }
        else {
            $this->__type = $type;
            $this->__db = $db;
            $this->__credential = $this->__credentials[ $this->__type ];
            $this->con = mysqli_connect(
                                    "localhost",
                                    $this->__credential['username'],
                                    $this->__credential['password']
                                    );
            if (!$this->con) {
                die('Could not connect: ' . mysql_error());
            }
            if($this->__db) {
                $this->db( $this->__db );
            }
        }
    }

    public function db($db=0) {
        $this->__db = $db;
        if(!$this->__db) {
            echo "You must enter a database name";
        }
        else {
            if( !mysqli_select_db($this->con,$this->__db) ) {
                echo $this->__db . " doesn't appear to be a valid database name. Please check the name and try again.";

            }
        }
    }
    public function types() {
        echo "Available types: \n";
        foreach($this->__credentials as $type=>$arr) {
            echo "$type\n";
        }
    }
}
