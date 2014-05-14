/******************************************* 

file: hello4.js
project: backbone.js pre-tutorial

*******************************************/

(function($){
	var Item = Backbone.Model.extend({
		defaults: {
			part1: 'hello',
			part2: 'world'
		}	
	});

	var List = Backbone.Collection.extend({
		model: Item	
	});

	var ItemView = Backbone.View.extend({
		tagName: 'li', // name of (orphan) root tag in this.el
		initialize: function(){
			_.bindAll(this, 'render');		
		},
		render: function(){
			$(this.el).html('<span>'+this.model.get('part1')+' '+this.model.get('part2')+'</span>');
		}
	});
	
	var ListView = Backbone.View.extend({
    	el: $('body'), // el attaches to existing element
		events: {
			'click button#add': 'addItem'
		},
		initialize: function(){
			_.bind(this, 'render', 'addItem', 'appendItem');
			
			this.collection = new List();
			this.collection.bind('add', this.appendItem); // collection even binder
			
			this.counter = 0;
			this.render();
		},
		render: function(){
			var self = this;
			$(this.el).append("<button id='add'>Add list item</button>");
      		$(this.el).append("<ul></ul>");
			_(this.collection.models).each(function(item){
				self.appendItem(item);
			}, this);
		},
		addItem: function(){
			this.counter++;
			var item = new Item();
			item.set({
				part2: item.get('part2') + this.counter // modify item defaults
			});
			this.collection.add(item);		
		},
		appendItem: function(item){
		  var itemView = new ItemView({
			model: item
		  });
		  $('ul', this.el).append(itemView.render().el);
		}
	});
	
	var listView = new ListView();

})(jQuery);

