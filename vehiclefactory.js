(function (app) {

    app.VehicleFactory = {
        build: function (vehicles) {
            // Strip out all of the keys
            var vehicleKeys = [];
            for (var key in vehicles)
                vehicleKeys.push(key);

            // Build a random vehicle every two seconds
            setInterval(function () {
                var i = Math.floor(Math.random() * vehicleKeys.length);
                var vehicleType = vehicleKeys[i];
                var vehicle = new vehicles[vehicleType]();

                // Add text to the DOM
                var div = $(document.createElement('div'));
                div.addClass(vehicleType);
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