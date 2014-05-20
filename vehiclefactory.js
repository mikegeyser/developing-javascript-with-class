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
                var p = document.createElement('p');
                p.className = vehicleType;
                p.appendChild(document.createTextNode(vehicle.drive()));
                document.body.appendChild(p);
            }, 2000);
        }
    };

})(window.app = window.app || {});