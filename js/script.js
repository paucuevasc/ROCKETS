
function Rocket(id,name,nPropellers,actualPot,speed,maxPot){
this.id=id;
this.name=name;
this.nPropellers=nPropellers;
this.actualPot=actualPot;
this.speed=speed;
this.maxPot=maxPot;
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
        rocket1=new Rocket("rocket1","Enterprise",3,[0,0,0],0,[10,30,80]);
        console.log(rocket1);
        dataShow(rocket1);}
    else if (valueRocket==2) {
        rocket2=new Rocket("rocket2","Tardis",6,[0,0,0,0,0,0,],0,[30,40,50,50,30,10]);
        console.log(rocket2);    
        dataShow(rocket2);
    }
    
   
}

function speedCalculator(rocket){
    
    var i=0;
    rocket.speed=0;
    while (i<rocket.actualPot.length){
        rocket.speed=rocket.speed+rocket.actualPot[i];
        i++;
    }

}
function rocketAccelerator(rocket){
    var i=0;
   
    while (i<rocket.actualPot.length){
        if (rocket.actualPot[i]<rocket.maxPot[i]){
            rocket.actualPot[i]=rocket.actualPot[i]+10;
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
   
    while (i<rocket.actualPot.length){
        if (rocket.actualPot[i]>0){
            rocket.actualPot[i]=rocket.actualPot[i]-10;
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
    console.log("."+rocket.id)
    console.log(rocketData);
    rocketData.innerHTML="NAME: "+rocket.name +"<br>"+ "nº propellers: " +rocket.nPropellers +"<br>"+ "actual Pot: "+rocket.actualPot +
    "<input id='accelerateButton' class='selectors' type='button' value='+' onclick='rocketAccelerator("+rocket.id+")'></input>"+
    "<input id='accelerateButton' class='selectors' type='button' value='-' onclick='rocketDecelerator("+rocket.id+")'></input>"+"<br>"+"<br>"+ "speed: "+ 
    rocket.speed +"<br>"+"max Pot: "+rocket.maxPot;
}
function demoSetup(){
    rocket1=new Rocket("rocket1","Enterprise",3,[0,0,0],0,[10,30,80]);
    console.log(rocket1);
    dataShow(rocket1);

    rocket2=new Rocket("rocket2","Tardis",6,[0,0,0,0,0,0,],0,[30,40,50,50,30,10]);
    console.log(rocket2);    
    dataShow(rocket2);

    let i=0;
    while(i<3){
        setTimeout(rocketAccelerator(rocket1),50000);
        setTimeout(rocketAccelerator(rocket2),50000);
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