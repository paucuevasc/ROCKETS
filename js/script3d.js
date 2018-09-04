var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
var stars=[];
var prevCubeC =0;
var cubeC;
var firstCoords=[null,null,null];

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize',function(){
	var width=window.innerWidth;
	var height=window.innerHeight;
	renderer.setSize(width,height);
	camera.aspect=width/height;
	camera.updateProjectionMatrix();
})

function cubeModificator(){
	//Create the shape
	
cube.scale.x=cubeC;
cube.scale.y=cubeC;
cube.scale.z=cubeC;

}

function lineDrawer(){
	console.log("ok");
	var coords=document.querySelector("#option2").value.split(',');
	if (firstCoords!=coords){
	var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3( firstCoords[0], firstCoords[1], firstCoords[2] ));
	geometry.vertices.push(new THREE.Vector3( coords[0],coords[1], coords[2]) );
	var line = new THREE.Line( geometry, material );
	scene.add(line);
	}
	firstCoords=coords;
}
controls=new THREE.OrbitControls(camera,renderer.domElement);
//Create the shape
var geometry=new THREE.BoxGeometry(cubeC,cubeC,cubeC);
//var cubeMaterials=[
//new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/image.png'), side:THREE.DoubleSide}),
	//new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/image.png'), side:THREE.DoubleSide}),
	//new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/image.png'), side:THREE.DoubleSide}),
	//new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/image.png'), side:THREE.DoubleSide}),
	//new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/image.png'), side:THREE.DoubleSide}),
	//new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/image.png'), side:THREE.DoubleSide})
//];
//Create a material, colour or image texture
var material = new THREE.MeshBasicMaterial({color:0x55FFFF,wireframe:false});
//var material =new THREE.MeshFaceMaterial(cubeMaterials);
var cube=new THREE.Mesh(geometry, material);
scene.add(cube);


camera.position.z=10;

var update = function(){
	
cube.rotation.x +=0.01;
cube.rotation.y +=0.01;
	

};


function addSphere(){

	// The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
	for ( var z= -1000; z < 1000; z+=20 ) {

		// Make a sphere (exactly the same as before). 
		var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
		var sphere = new THREE.Mesh(geometry, material)

		// This time we give the sphere random x and y positions between -500 and 500
		sphere.position.x = Math.random() * 1000 - 500;
		sphere.position.y = Math.random() * 1000 - 500;

		// Then set the z position to where it is in the loop (distance of camera)
		sphere.position.z = z;

		// scale it up a bit
		sphere.scale.x = sphere.scale.y = 2;

		//add the sphere to the scene
		scene.add( sphere );

		//finally push it to the stars array 
		stars.push(sphere); 
	}
}

function animateStars() { 
	
// loop through each star
for(var i=0; i<stars.length; i++) {

star = stars[i]; 
	
// and move it forward dependent on the mouseY position. 
star.position.z +=  i/10;
	
// if the particle is too close move it to the back
if(star.position.z>1000) star.position.z-=2000; 

}

}


var render = function(){
renderer.render(scene,camera);
animateStars();
};


var GameLoop=function(){
requestAnimationFrame(GameLoop);
update();
render();
addSphere();
};

GameLoop();