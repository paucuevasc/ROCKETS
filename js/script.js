var speed;
var rocket1;
var rocket2;

function Rocket(id, name) {
    this.id = id;
    this.name = name;
    this.propellers = new Array();
    this.acceleratorCaller = function acceleratorCaller() {
        var i = 0;
        var value = document.querySelector("#accelerationValue"+this.id).value;
        if (isNaN(value) == true) {
            value = 10;
        }
        while (i < this.propellers.length) {
            this.propellers[i].propellerAccelerator(value);
            i++;
        }
    }

    this.deceleratorCaller = function deceleratorCaller() {
        var i = 0;
        var value = document.querySelector("#accelerationValue"+this.id).value;
        if (isNaN(value) == true) {
            value = 10;
        }
        while (i < this.propellers.length) {
            this.propellers[i].propellerDecelerator(value);
            i++;
        }
    }
}


function Propeller(id, actualPot, maxPot) {
    this.id = id;
    this.actualPot = actualPot;
    this.maxPot = maxPot;
    this.propellerAccelerator = function propellerAccelerator(value) {

        if (this.actualPot < this.maxPot) {
            this.actualPot = this.actualPot + 1 * value;
        }
        else if (this.actualPot > this.maxPot) {
            this.actualPot = this.maxPot;
        }
    }



    this.propellerDecelerator = function propellerDecelerator(value) {
        if (this.actualPot > 0) {
            this.actualPot = this.actualPot - 1 * value;
        }
        if (this.actualPot < 0) {
            this.actualPot = 0;
        }
    }
}



function addPropeller(rocket, propeller) {
    rocket.propellers.push(propeller);
}

function rocket1Ennable() {
    var color = "#ff6677";
    cubreCreator(color);
    rocket1 = new Rocket("rocket1", "Enterprise");
    var prop = new Propeller(0, 0, 10);
    addPropeller(rocket1, prop);
    prop = new Propeller(1, 0, 30);
    addPropeller(rocket1, prop);
    prop = new Propeller(2, 0, 80);
    addPropeller(rocket1, prop);
    console.log(rocket1);
    dataShow(rocket1);
}

function rocket2Ennable() {

    var color = "red";
    cubreCreator(color);
    rocket2 = new Rocket("rocket2", "Tardis");
    var prop = new Propeller(0, 0, 30);
    addPropeller(rocket2, prop);
    prop = new Propeller(1, 0, 40);
    addPropeller(rocket2, prop);
    prop = new Propeller(2, 0, 50);
    addPropeller(rocket2, prop);
    prop = new Propeller(3, 0, 50);
    addPropeller(rocket2, prop);
    prop = new Propeller(4, 0, 30);
    addPropeller(rocket2, prop);
    prop = new Propeller(5, 0, 10);
    addPropeller(rocket2, prop);
    console.log(rocket2);
    dataShow(rocket2);
}

function rocketCreator() {

    var e = document.getElementById("rocketId");
    var valueRocket = e.options[e.selectedIndex].value;
    if (valueRocket == 1) {
        rocket1Ennable();
    }
    else if (valueRocket == 2) {
        rocket2Ennable();
    }
}

function speedCalculator(rocket) {

    var i = 0;
    speed = 0;
    while (i < rocket.propellers.length) {
        speed = speed + rocket.propellers[i].actualPot;
        i++;
    }
    return speed;
}
function rocketAccelerator(rocket) {
  
    rocket.acceleratorCaller();
    speedCalculator(rocket);
    dataShow(rocket);
}

function rocketDecelerator(rocket) {
    rocket.deceleratorCaller();
    speedCalculator(rocket);
    dataShow(rocket);
}

function dataShow(rocket) {
    var search = "." + rocket.id;
    rocketData = document.querySelector("#" + rocket.id);
    rocketData.innerHTML = "NAME: " + rocket.name + "<br>" + "actual Pot: ";
    let i = 0;
    while (i < rocket.propellers.length) {
        rocketData.innerHTML = rocketData.innerHTML + "Pr" + (rocket.propellers[i].id + 1) + ": " + rocket.propellers[i].actualPot + "/" + rocket.propellers[i].maxPot + "<br>";
        i++;
    }
    speedCalculator(rocket);
    uiShow(rocket);    
}

function uiShow(rocket){
    rocketData.innerHTML = rocketData.innerHTML + "Speed: " + speed + "<br>" +

    "<input id='accelerateButton' class='selectors' type='button' value='+' onclick='rocketAccelerator(" + rocket.id + ")'></input>" +
    "<input id='accelerateButton' class='selectors' type='button' value='-' onclick='rocketDecelerator(" + rocket.id + ")'></input>" + "<br>" +
    "<input id='accelerationValue"+rocket.id+"' class='selectors' type='text' value='acceleration value'></input>";

}
function demoSetup() {


    let i = 0;
    while (i < 3) {
        setTimeout(rocketAccelerator(rocket1), 500);
        setTimeout(rocketAccelerator(rocket2), 500);
        i++;
    }
    i = 0;
    while (i < 5) {
        setTimeout(rocketDecelerator(rocket1), 50000);
        i++;
    }
    i = 0;
    while (i < 7) {
        setTimeout(rocketDecelerator(rocket2), 50000);
        i++;
    }
    i = 0;
    while (i < 15) {
        setTimeout(rocketAccelerator(rocket1), 50000);
        setTimeout(rocketAccelerator(rocket2), 50000);
        i++;
    }
}