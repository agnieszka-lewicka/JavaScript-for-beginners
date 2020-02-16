var Car = function(maxSpeed, driver){

        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.drive = function(speed, time) {
                console.log(speed * time);
        };
        this.logDriver = function() {
                console.log("driver name is " + this.driver);
        };

}

var myCar = new Car(70, "Jesus");
var myCar2 = new Car(50, "Agnieszka");
var myCar3 = new Car(30, "J. Lo");
var myCar4 = new Car(100, "Teddy Bear");

myCar2.drive(30, 3);
myCar4.logDriver();
console.log(myCar3.maxSpeed);

myCar3.logDriver();