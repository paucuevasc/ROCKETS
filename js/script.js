function Rocket(name,nPropellers){
this.name=name;
this.nPropellers=nPropellers;
}


//var rocket1=new Rocket("Enterprise",3);
//console.log(rocket1);

function rocketCreator(){
    var e = document.getElementById("rocketId");
    var strRocket = e.options[e.selectedIndex].value;
    if (strRocket==1) {
        var rocket1=new Rocket("Enterprise",3);
        console.log(rocket1);}
    else if (strRocket==2) {
        var rocket1=new Rocket("Tardis",6);
        console.log(rocket1);    
    }
    rocketData=document.querySelector(".rocketData");
    rocketData.innerHTML="NAME: "+rocket1.name +"<br>"+ "nº propellers: " +rocket1.nPropellers;
}
