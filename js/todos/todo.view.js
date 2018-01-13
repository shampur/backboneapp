app.views.todo = Backbone.View.extend({
    model: null,
    initialize: function(options) {
        this.model = options.model;
        _.bindAll(this, 'render');
        this.listenTo(this.model, 'change', this.render);
        //this.model.on('change', this.render, this);
    },
    events: {
        'click button': 'updateTodo',
        'click .fa-trash': 'removeTodo'
    },
    template: Handlebars.templates['todo'],
    tagName: 'div',
    className: 'columns is-centered is-tablet',
    render: function() {
        var html = this.template(this.model.attributes);
        this.$el.html(html);
        return this;
    },
    updateTodo: function() {
        this.model.setCompleted(true);
    },
    removeTodo: function() {
        this.model.collection.remove(this.model);
        this.remove()
        //this.$el.remove();
        //this.model.destroy();
    }
});