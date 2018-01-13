app.views.todos = Backbone.View.extend({
    collection: null,
    initialize: function(options){
        _.bindAll(this, 'render');
        this.collection = options.collection;
        app.todos = this.collection;
        this.listenTo(this.collection, 'add', this.addOne);
    },
    el: 'div#container',
    template: Handlebars.templates['todos'],
    render: function () {
        var that = this;
        this.$el.html('');
        this.$el.html(this.template());
        var todosString = localStorage.getItem('todos');
        if (todosString) {
            var todos = JSON.parse(todosString);
            var todosModelList = [];
            todos.forEach(function (todo, idx) {
                var todomodel = new app.models.todo(todo);
                todosModelList.push(todomodel);
                var todoview = new app.views.todo({model: todomodel});
                that.$('#todos').append(todoview.render().el);
            });
            this.collection.reset(todosModelList);
            //this.collection = new app.collections.todos(todosModelList);
        }
        return this;
    },
    addOne: function (todo) {
        var todoView = new app.views.todo({model: todo});
        this.$el.append(todoView.render().el);
    }
});