var speed;
function Rocket(id,name){
this.id=id;
this.name=name;
this.propellers=new Array();
}

function Propeller(id,actualPot,maxPot){
    this.id=id;
    this.actualPot=actualPot;
    this.maxPot=maxPot;
}

/*function addPropeller(rocket){
    var e = document.getElementById("rocketId");
    var valueRocket = e.options[e.selectedIndex].value;
//var propeller=new Propeller(1,0,10);
    if (valueRocket==1){
        rocket.propeller=({id:1,actualPot:0,maxPot:10},
            {id:2,actualPot:0,maxPot:10},
            {id:3,actualPot:0,maxPot:10});
    }
    else if (valueRocket==2) {    
        rocket.propeller=({id:1,actualPot:0,maxPot:10},
            {id:2,actualPot:0,maxPot:10},
            {id:3,actualPot:0,maxPot:10},        
            {id:4,actualPot:0,maxPot:10},
            {id:5,actualPot:0,maxPot:10}, 
            {id:6,actualPot:0,maxPot:10});       
    }

}*/

function addPropeller(rocket,propeller){
    rocket.propellers.push(propeller);
}

//var rocket1=new Rocket("Enterprise",3);
//console.log(rocket1);
var rocket1;
var rocket2;
function rocketCreator(){
    var e = document.getElementById("rocketId");
    var valueRocket = e.options[e.selectedIndex].value;
    var nameRocket =e.options[e.selectedIndex].innerHTML;
    if (valueRocket==1) {
        rocket1=new Rocket("rocket1","Enterprise");
        var prop=new Propeller(0,0,10);
        addPropeller(rocket1,prop);
        prop=new Propeller(1,0,30);
        addPropeller(rocket1,prop);
        prop=new Propeller(2,0,80);
        addPropeller(rocket1,prop);
        console.log(rocket1);
        dataShow(rocket1);}
    else if (valueRocket==2) {
        rocket2=new Rocket("rocket2","Tardis");
        var prop=new Propeller(0,0,30);
        addPropeller(rocket2,prop);
        prop=new Propeller(1,0,40);
        addPropeller(rocket2,prop);
        prop=new Propeller(2,0,50);
        addPropeller(rocket2,prop);
        prop=new Propeller(3,0,50);
        addPropeller(rocket2,prop);
        prop=new Propeller(4,0,30);
        addPropeller(rocket2,prop);
        prop=new Propeller(5,0,10);
        addPropeller(rocket2,prop);
        console.log(rocket2);    
        dataShow(rocket2);
    }
    
   
}

function speedCalculator(rocket){
    
    var i=0;
    speed=0;
    while (i<rocket.propellers.length){
        speed=speed+rocket.propellers[i].actualPot;
        i++;
    }
    return speed;
}
function rocketAccelerator(rocket){
    var i=0;
   
    while (i<rocket.propellers.length){
        if (rocket.propellers[i].actualPot<rocket.propellers[i].maxPot){
            rocket.propellers[i].actualPot=rocket.propellers[i].actualPot+10;
            i++;
        }
        else {
            i++;
        }
    }
    speedCalculator(rocket);
    dataShow(rocket);
}

function rocketDecelerator(rocket){
    var i=0;
   
    while (i<rocket.propellers.length){
        if (rocket.propellers[i].actualPot>0){
            rocket.propellers[i].actualPot=rocket.propellers[i].actualPot-10;
            i++;
        }
        else {
            i++;
        }
    }
    speedCalculator(rocket);
    dataShow(rocket);
}

function dataShow(rocket){
    var search="."+rocket.id;
    rocketData=document.querySelector("#"+rocket.id);
    console.log(rocket1.propeller);
    rocketData.innerHTML="NAME: "+rocket.name +"<br>"+"actual Pot: ";
    let i=0;
    while (i<rocket.propellers.length){
        rocketData.innerHTML=rocketData.innerHTML+"Pr"+(rocket.propellers[i].id+1)+": "+rocket.propellers[i].actualPot+"/"+rocket.propellers[i].maxPot+"<br>";
        i++;
    }
    speedCalculator(rocket);
    rocketData.innerHTML=rocketData.innerHTML+"Speed: "+speed + "<br>"+
    
    "<input id='accelerateButton' class='selectors' type='button' value='+' onclick='rocketAccelerator("+rocket.id+")'></input>"+
    "<input id='accelerateButton' class='selectors' type='button' value='-' onclick='rocketDecelerator("+rocket.id+")'></input>";
}
function demoSetup(){


    let i=0;
    while(i<3){
        setTimeout(rocketAccelerator(rocket1),500);
        setTimeout(rocketAccelerator(rocket2),500);
        i++;
    }
    i=0;
    while(i<5){
        setTimeout(rocketDecelerator(rocket1),50000);
        i++;
    }
    i=0;
    while(i<7){
        setTimeout(rocketDecelerator(rocket2),50000);
        i++;
    }
    i=0;
    while(i<15){
        setTimeout(rocketAccelerator(rocket1),50000);
        setTimeout(rocketAccelerator(rocket2),50000);
        i++;
    }
}