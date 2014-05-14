/*******************************************************************************
file: ranker.js
project: Scandal Ranker
date: May 2013
author: P. Bustamante

overview: builds sortable stack of "scandals." User can rank the items. Upon submit, the users rankings are submitted to a database, then results comparing user's selections to overall rankings are returned.

on page load: 
- buildSortStats() creates the sortable stack of items to rank

*******************************************************************************/

/***********************************************************
script variables
************************************************************/

var sortedIDs = [];
var userRankings;
var resetText;


/***********************************************************
 CAPTURE AND PARSE URL VARIABLES:
 	captures query string
 	splits t1, t2 and stats and puts them into params[] array
 	sets curteam1 and curteam2 variables
 	splits params.stats and puts them into sortedIDs array
 	
************************************************************/
var params = function () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

$(document).ready(function(){ // begin document.ready block

/***********************************************************
 INITIALIZING ACTIONS:
 build sorting module
 
************************************************************/
	
	$('#rankResults').hide();
	buildSortStats()
	
	
/********************************************************************
 BUILD FUNCTIONS:
 	buildSortStats(): 	constructs left-side sortable items module
 	
*********************************************************************/

function buildSortStats() {
	
	// array of sortableStats titles and ids
	var statNames = {'a1':'1868: A. Johnson: Impeachment', 'a2':'1875: Grant: The Whiskey Ring','a3':'1921-23: Harding: Teapot Dome','a4':'1973: Nixon: Watergate','a5':'1973: Nixon: Agnew resignation','a6':'1986: Reagan: Iran-Contra affair','a7':'1998: Clinton: Lewinsky affair','a8':'2006-2007: Bush: U.S. attorneys', 'a9':'2007: Bush: Valerie Plame', 'a10': '2012: Obama: Benghazi', 'a11': '2013: Obama: IRS', 'a12': '2013: Obama: AP phone records'};
	
	// compares sortedIDs[] to full list of stats and adds whatever is missing
	var fullStats = ['a1', 'a2', 'a3', 'a4','a5', 'a6', 'a7', 'a8','a9','a10','a11','a12'];
	var exStats = new Array();
	exStats = jQuery.grep(fullStats,function (item) {
    	return jQuery.inArray(item, sortedIDs) < 0; // called sortedIDs array
	});	
	var statsList = sortedIDs.concat(exStats);

	//Empty out existing html
	$('#sortableStats').html('');
	
	// loop through, build, and append sortable stats to #sortableStats <div>
	var len = statsList.length;
	for (var i=0; i<len; i++) {
		var statNameID = statsList[i];
		$('#sortableStats').append('<div id="'+statsList[i]+'" class="dragger"><p>'+eval("statNames." + statNameID) + '</p></div>')
	}

	resetText = $("#sortableStats").html();

}


/***********************************************************
 BUTTON ACTIONS:
 	#submitbtn: records selected rankings
 	#reset:		resets ranking blocks to initial settings
 	#return:	returns user to ranking module with their rankings selected.
 			
************************************************************/
	$('#submitbtn').on('click', function() {
		
		userRankings = $("#sortableStats").html();

		sortedIDs = [];
		$("#sortableStats div.dragger").each(function(i) {
			sortedIDs[i] = $(this).attr('id');
		});
		
		var rankOrder = sortedIDs.join("|");
		
		//process selections in php script
		$('#resultsList').load('incl/ranker.php?ranking='+rankOrder, function(){
			$('#statsAll').hide();
			$('#rankResults').show();
		});
	});

	$('#reset').click(function () {
    	$("#sortableStats").html(resetText);

	});

	$('#return').click(function () {
		$('#rankResults').hide();
		$('#statsAll').show();
	});

}); // end document.ready block


/********************************************************************
 SORTING AND OTHER STUFF
 	anonymous function to activate sorting action
 	doneSort(): set off when stat is sorted or checked/unchecked 
 				and when teams are selected
 				captures selected stats in order
 				 
*********************************************************************/
$(function() {
    $( "#sortableStats" ).sortable({
        placeholder: "statsPlaceHolder"
    });
    $( "#sortableStats" ).disableSelection();

});

function doneSort() {
    sortedIDs = [];

    $("#sortableStats div.dragger").each(function(i) {
    	sortedIDs[i] = $(this).attr('id');
    });
}

