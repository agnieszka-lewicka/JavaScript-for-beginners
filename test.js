var age = 5;

while (age < 10) {

    console.log ("You are less than 10 years old");
    age++;
}

document.write ("You are now over 10 years old ");

var links = document.getElementsByTagName("a");

for (i = 1; i < links.length; i++) {

    console.log ("this is link numer" + i);
}

document.write ("all links now looped");