require(['domReady!', 'jquery', 'underscore', 'backbone', 'js/models'], function(domReady, $, _, Backbone, m) {
    var Router = Backbone.Router.extend({
        routes: {
            "auth": "auth",  // Login / Signup Page
            "whoami": "whoami"  // Find out information about the current user
        }
    });

    var router = new Router();
    router.on("route:whoami", function() {
        var whoami = new m.WhoAmI();
        whoami.fetch({
            success: function(model, response, options) {
                if (model.get('authenticated')) {
                    // Navigate to the home page
                } else {
                    // Navigate to the auth page
                    router.navigate('auth', {
                        'trigger': true, 'replace': true
                    });
                }
            }
        });
    });
    router.on('route:auth', function() {
    });
    Backbone.history.start({
        root: ""
    });
    router.navigate("whoami", true);
});
