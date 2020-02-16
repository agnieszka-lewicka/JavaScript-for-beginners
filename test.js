var myCar2 = {

            maxSpeed: 70,
            driver: "Aga Singer",
            drive: function(speed, time) {
                    console.log(speed * time);
            },
            test: function(){
                    console.log(this);
            }

};


var myCar3 = {

        maxSpeed: 70,
        driver: "Zenek",
        drive: function(speed, time) {
                console.log(speed * time);
        },
        logDriver: function () {
                console.log("the driver name is " + this.driver);

        }

};


console.log(myCar2.maxSpeed);
myCar2.drive(30, 3);
myCar2.test();
myCar3.logDriver();
