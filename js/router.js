(function() {
    var router = Backbone.Router.extend({
        routes: {
            'about': 'showAboutPage',
            'todos': 'showTodos',
        },

        showAboutPage: function() {
            var aboutView = new app.views.about();
            aboutView.render();
        },

        showTodos: function() {
            var todos = [
                {
                    title: 'Complete todo app',
                    description: 'Need to complete the coding of the todo app and test it',
                },
                {
                    title: 'Fill the hdfc bank form',
                    description: 'The hdfc form sent by sandhya has to be filled and get it verifies from sandhya'
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            var todosCollections = new app.collections.todos();
            var todosView = new app.views.todos({collection: todosCollections});
            todosView.render();
        }
    });

    window.app.router =  new router();
    var appView = new app.views.layout();
    appView.render();
    Backbone.history.start();
    if(window.location.hash.length === 0) {
        window.app.router.navigate('about', {trigger: true, replace: true});
    }
})();

