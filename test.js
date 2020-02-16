var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Aga";

myCar.drive = function() {

        console.log ("now driving");

};

myCar.drive();

var myCar2 = {

            maxSpeed: 70,
            driver: "Aga Singer",
            drive: function(speed, time) {

                    console.log(speed * time);
            }

};

myCar2.drive(30, 3);
