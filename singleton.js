(function() {

    var Singleton = (function() {

         var instance;

         function init() {

            // PROPERTIES
            var prop = [];
            
            // METHODS
            function create() {}
            function remove() {}

            // RETURN PROPERTIES and METHODS
            // ON INITIALIZATION
            return {
                prop: prop,
                create: create,
                remove: remove
            };
         }

         return {
             getInstance: function() {
                 if(!instance) {
                    instance = init();
                 }
                 return instance;
             }
         }

    })();

})();