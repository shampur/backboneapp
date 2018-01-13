(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"box\">\n    <div class=\"content\">\n        <div class=\"title\">About the App</div>\n        <p>This is a single page application which is built using the following technologies: </p>\n        <ul>\n            <li>\n                Backbone.js - This is a minimalistic framework which provides a structure to the web applications through\n                its extremely light weight models, collections and views\n            </li>\n            <li>\n                Underscore.js - This library provides useful helper functions for working with collection of data.\n            </li>\n            <li>\n                Jquery - This is a javascript framework which provides api that eases the dom traversal, manipulation,\n                event handling and ajax much simpler than the traditional javascript functions.\n            </li>\n            <li>\n                Handlebars - This is a html template engine that is built on top of Mustache.js very powerful in making the\n                application modular.\n            </li>\n            <li>\n                Bulma - This is a new css framework used for styling the application.\n            </li>\n            <li>\n                gulp - This is the task manager that is used for setting up the build process.\n            </li>\n        </ul>\n    </div>\n</div>";
},"useData":true});
templates['layout'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"navbar is-warning\">\n    <div class=\"navbar-brand\">\n        <div class=\"navbar-item\">\n            <img src=\"./images/appHeader.png\" alt=\"Single page application built using Backbone.js\" width=\"112\"\n                 height=\"28\">\n        </div>\n        <div class=\"navbar-burger burger\" data-target=\"navMenu\"><span></span><span></span><span></span></div>\n    </div>\n    <div class=\"navbar-menu\" id=\"navMenu\">\n        <div class=\"navbar-start\">\n            <a class=\"navbar-item\" href=\"#about\" data-link=\"about\">\n                "
    + alias4(((helper = (helper = helpers.menuItem1 || (depth0 != null ? depth0.menuItem1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"menuItem1","hash":{},"data":data}) : helper)))
    + "\n            </a>\n            <a class=\"navbar-item\" href=\"#todos\" data-link=\"todos\">\n                "
    + alias4(((helper = (helper = helpers.menuItem2 || (depth0 != null ? depth0.menuItem2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"menuItem2","hash":{},"data":data}) : helper)))
    + "\n            </a>\n        </div>\n    </div>\n</nav>\n<div id=\"container\">\n\n</div>";
},"useData":true});
templates['todo'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"tag is-success\">Completed</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <button class=\"button is-small\">\n                    Mark as completed\n                </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"column is-three-quarters todo\">\n    <div class=\"columns is-desktop\">\n        <div class=\"column is-four-fifths\">\n            <div class=\"title is-5\">\n                "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div class=\"content is-small\">\n                "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div>\n                <span class=\"tag is-warning\">created on : "
    + alias4(((helper = (helper = helpers.create_ts || (depth0 != null ? depth0.create_ts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"create_ts","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n            <div>\n                <span class=\"tag is-warning\">updated on : "
    + alias4(((helper = (helper = helpers.update_ts || (depth0 != null ? depth0.update_ts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"update_ts","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n        </div>\n        <div class=\"column is-one-fifth todoControls\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            <div>\n                <i class=\"fa fa-trash fa-lg\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['todos'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content\">\n    <div class=\"title is-4\">Todo App</div>\n    <div class=\"subtitle is-6\">\n        This is a simple todo application, Try marking few randomly added todos as completed.\n        and also try deleting the todos.\n    </div>\n</div>\n<div id=\"todos\">\n\n</div>";
},"useData":true});
})();