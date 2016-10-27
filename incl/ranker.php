<?php

/*******************************************************************************
file: ranker.php
project: Ranker [scandal ranker]
date: May 2013
author: P. Bustamante

overview: captures users ranked selections and inserts them into data table. retrieves full results and outputs to rankResults div.

*******************************************************************************/
		
	require_once 'Connection.class.php';
	$connection = new Connection('ranker','ranker');

## variables to hold URL variables
$rankingsAll;
$rankList;
$rankings;
$votingtotal;
$vtotal;
$table = 'trump';

if ($_GET):

## capture variables from the URL
	$rankingsAll = $_GET['ranking'];
	$rankList = explode("|", $rankingsAll);

	$len = count($rankList);
	
	for ($i = 0; $i < $len; $i++):
		//echo $rankList[$i];
		$sql = "UPDATE $table
					SET	rank_total = rank_total + ($len - $i)
					WHERE ranker_id = '$rankList[$i]'";
		$results = mysqli_query($connection->con,$sql);
    endfor;

	$sql = "SELECT * from $table
			order by rank_total desc";
	$results = mysqli_query($connection->con,$sql);
	while($rankings[]=mysqli_fetch_array($results));
	
endif;

$rlen = count($rankings);
for ($i = 0; $i < $rlen-1; $i++):
    $userrank = array_search($rankings[$i]['ranker_id'], $rankList);
?>
    <div class="dragger"><p><?php echo $i+1 ?>. <?php echo $rankings[$i]['title'] ?><span class="urank">You said: <?php echo $userrank+1; ?></span></p></div>
					
<?php endfor;
