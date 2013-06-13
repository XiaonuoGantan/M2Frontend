requirejs.config({
    'baseUrl': "/static/",
    'paths': {
        'app': 'js/app',
        'jquery': 'jquery/jquery.min',
        'backbone': 'backbone/backbone-min',
        'underscore': 'backbone/underscore-min',
        'domReady': 'requirejs/plugins/domReady'
    },
    'shim': {
        "jquery": {
            exports: 'jQuery'
        },
        "backbone": {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        "underscore": {
            deps: ['jquery'],
            exports: '_'
        }
    }
});

requirejs(["js/main"]);
