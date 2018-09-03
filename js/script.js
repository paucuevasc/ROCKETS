function Rocket(name,nPropellers){
this.name=name;
this.nPropellers=nPropellers;
}

var rocket1=new Rocket("Enterprise",3);
console.log(rocket1);

rocketData=document.querySelector(".rocketData");
rocketData.innerHTML="NAME: "+rocket1.name +"<br>"+ "nº propellers: " +rocket1.nPropellers;