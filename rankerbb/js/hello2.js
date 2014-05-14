/******************************************* 

file: hello2.js
project: backbone.js pre-tutorial

*******************************************/

(function($) {

	var ListView = Backbone.View.extend({
		
		el: $('body'), // el attaches to exiting element
		
		events: {
			'click button#add': 'addItem'		
		},
	
		initialize: function(){
			_.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here
		
			this.counter = 0; // total number of items added thus far
			this.render();
		},
		
		render: function(){
			$(this.el).append("<button id='add'>Add list item</button>");
			$(this.el).append("<ul></ul>");
		},
	
		addItem: function(){
			this.counter++;
			$('ul', this.el).append("<li>hello world"+this.counter+"</li>");		
		}
	
	});

	var listView = new ListView();

})(jQuery);