var speed;

function Rocket(name,nPropellers,actualPot,maxPot){
this.name=name;
this.nPropellers=nPropellers;
this.actualPot=actualPot;
this.maxPot=maxPot;
}


//var rocket1=new Rocket("Enterprise",3);
//console.log(rocket1);

function rocketCreator(){
    var e = document.getElementById("rocketId");
    var strRocket = e.options[e.selectedIndex].value;
    if (strRocket==1) {
        var rocket1=new Rocket("Enterprise",3,[0,0,0],[10,30,80]);
        console.log(rocket1);}
    else if (strRocket==2) {
        var rocket1=new Rocket("Tardis",6,[0,0,0,0,0,0,],[30,40,50,50,30,10]);
        console.log(rocket1);    
    }
    speedCalculator(rocket1);
    dataShow(rocket1);
    
}

function speedCalculator(rocket1){
    var i=0;
    speed=0;
    while (i<rocket1.actualPot.length){
        speed=speed+rocket1.actualPot[i];
        i++;
    }
return speed;
}

function dataShow(rocket1){
    rocketData=document.querySelector(".rocketData");
    rocketData.innerHTML="NAME: "+rocket1.name +"<br>"+ "nº propellers: " +rocket1.nPropellers +"<br>"+ "actual Pot: "+rocket1.actualPot +"<br>"+ "speed: "+ speed +"<br>"+"max Pot: "+rocket1.maxPot;
}
