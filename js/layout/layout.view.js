app.views.layout = Backbone.View.extend({
    initialize: function() {
        Backbone.history.on('route', this.loadLink, this);
        //this.listenTo(Backbone.history.route, 'route', this.loadLink);
    },
    el: 'div#app',
    template: Handlebars.templates['layout'],
    events: {
        'click #navMenu .navbar-item': 'loadLink'
    },
    render: function() {
        this.$el.html(this.template({menuItem1: 'about', menuItem2: 'todos'}));
        if(window.location.hash.length > 0) {

        }
        // app.router.navigate('about');
        return this;
    },
    loadLink: function() {
        this.$('#navMenu .navbar-item').removeClass('is-active');
        this.$('[data-link=' +Backbone.history.fragment+']').addClass('is-active');
        //event.target.classList.add('is-active');
        // app.router.navigate(event.target.dataset.link, {trigger: true});
    }
});