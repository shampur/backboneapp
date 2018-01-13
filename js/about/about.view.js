app.views.about = Backbone.View.extend({
    el: 'div#container',
    template: Handlebars.templates['about'],
    render: function() {
        var htmlToRender = this.template();
        this.$el.html(htmlToRender);
        return this;
    },
});