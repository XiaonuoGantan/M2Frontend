define(['backbone'], function(Backbone) {
    var WhoAmI = Backbone.Model.extend({
        initialize: function(options) {
            this.authenticated = false; 
        },
        urlRoot: '/api/v1/whoami/',
        parse: function(response) {
            var attributes = {};
            var authenticated = false;
            if (response.length > 0) {
                authenticated = true; 
            }
            attributes.authenticated = authenticated;
            return attributes;
        }
    });

    return {
        'WhoAmI': WhoAmI
    };
});
