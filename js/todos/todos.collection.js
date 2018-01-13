app.collections.todos = Backbone.Collection.extend({
    initialize: function() {
        _.bindAll(this, 'persistItem');
        this.listenTo(this, 'add', this.persistItem);
        //this.on('add', this.persistItem);
    },
    model: app.models.todo,
    persistItem: function(item){
        console.log ('Collection is adding the below item : ');
        console.log(item.toJSON());
    }
});

