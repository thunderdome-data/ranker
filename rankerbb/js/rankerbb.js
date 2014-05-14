/******************************************* 

file: rankerbb.js
project: Ranker re-written in backbone.js

*******************************************/



(function($) {

	var ListView = Backbone.View.extend({
		
		//el: $('#sortableStats'), // attaches 'this.el' to an existing element.
		el: $('#statsAll'), 
		
		events: {
			'click a#submitbtn': 'submitRank',
			'click a#reset': 'resetRank'
		},
		
		initialize: function(){
		
			resetText = 'hey there!';
			
			// array of presidential scandals
			statNames = {'a1':'1868: A. Johnson: Impeachment', 'a2':'1875: Grant: The Whiskey Ring','a3':'1921-23: Harding: Teapot Dome','a4':'1973: Nixon: Watergate','a5':'1973: Nixon: Agnew resignation','a6':'1986: Reagan: Iran-Contra affair','a7':'1998: Clinton: Lewinsky affair','a8':'2006-2007: Bush: U.S. attorneys', 'a9':'2007: Bush: Valerie Plame', 'a10': '2012: Obama: Benghazi', 'a11': '2013: Obama: IRS', 'a12': '2013: Obama: AP phone records'};

			statsList = ['a1', 'a2', 'a3', 'a4','a5', 'a6', 'a7', 'a8','a9','a10','a11','a12'];

			
			_.bindAll(this, 'render', 'submitRank', 'resetRank'); // fixes loss of context for 'this' within methods
			
			this.render(); // not all views are self-rendering		
		},
			
		render: function(){
			
			$(this.el).append('<div class="imp">MORE SCANDALOUS</div><div id="sortableStats"></div><div class="imp">LESS SCANDALOUS</div><div id="shorts"><p><a href=#" id="submitbtn">Submit your rankings</a></p><p><a href="#" id="reset">Reset</a></p></div>');

			
			len = statsList.length;
			
			for (var i=0; i<len; i++) {
			
				var statNameID = statsList[i];
				$('#sortableStats').append('<div id="'+statsList[i]+'" class="dragger"><p>'+eval("statNames." + statNameID) + '</p></div>');		

			}
			
			resetText = $("#sortableStats").html();
			//console.log(resetText);
			

		},
		
		submitRank: function(){
			
			sortedIDs = [];
			$("#sortableStats div.dragger").each(function(i) {
				sortedIDs[i] = $(this).attr('id');
			});
		
			var rankOrder = sortedIDs.join("|");
			
			console.log(rankOrder);

		},
		
		resetRank: function(){
			
    		$("#sortableStats").html(resetText);
		
		}
	
	});

	var listView = new ListView();

})(jQuery);

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

