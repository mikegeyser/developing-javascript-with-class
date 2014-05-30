(function (app) {

    app.VehicleFactory = {
        build: function (vehicles) {
            // Build a random vehicle every two seconds
            setInterval(function () {
                var i = Math.floor(Math.random() * vehicles.length);
                var vehicle = new vehicles[i]();

                // Add text to the DOM
                var div = $(document.createElement('div'));
                div.addClass(vehicle.type);
                div.text(vehicle.drive());

                //$(".parking").prepend(div);
                div.hide()
                    .css('opacity', 0.0)
                    .prependTo('.parking')
                    .slideDown('slow')
                    .animate({ opacity: 1.0 });

            }, 2000);
        }
    };

})(window.app = window.app || {});