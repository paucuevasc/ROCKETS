var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
var stars=[];
var prevCubeC =0;
var cubeC;
var cube;
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
function cubreCreator(cubeColor){
var geometry=new THREE.BoxGeometry(cubeC,cubeC,cubeC);
var material = new THREE.MeshBasicMaterial({color:cubeColor,wireframe:false});

cube=new THREE.Mesh(geometry, material);
scene.add(cube);
}

geometry = new THREE.Geometry();
for ( i = 0; i < 1000; i ++ ) {
	var vertex = new THREE.Vector3();
	vertex.x = Math.round((1000 * Math.random() - 500)/20)*20;
	vertex.y = Math.round((1000 * Math.random() - 500)/20)*20;
	vertex.z = Math.round((1000 * Math.random() - 500)/20)*20;
	geometry.vertices.push( vertex );
}
material = new THREE.PointsMaterial( { size: 2, sizeAttenuation: false, transparent: true } );
material.color.setHex(  );
particles = new THREE.Points( geometry, material );
particles.sortParticles = true;
scene.add( particles );

camera.position.z=10;

var update = function(){
	

if (isNaN(speed)==false){
	
	cube.translateZ(speed/1000 );

}
};




var render = function(){
renderer.render(scene,camera);

};


var GameLoop=function(){
requestAnimationFrame(GameLoop);
update();
render();

};

GameLoop();



var color = [100, 100, 200];
function draw() 
	{
	camera.position.x = Math.sin( Date.now() * 0.003 ) * 10 
										+ Math.cos( Date.now() * 0.003 ) * 10;
	camera.position.y = Math.cos( Date.now() * 0.006 ) * 10;
	camera.rotation.z = Math.cos( Date.now() * 0.00006 ) * 50 +500;
	color = color.map(function(d, i){ return (d + 1 + i) % 256 })
	
	geometry = new THREE.Geometry();
	material.color.set( new THREE.Color(color[2], color[2], color[2]))
	material.color.set( new THREE.Color('white'))
	
	for ( i = 0; i < 60; i ++ ) {
		var vertex = new THREE.Vector3();
		vertex.x = Math.round((1000 * Math.random() - 500)/20)*20;
		vertex.y = Math.round((1000 * Math.random() - 500)/20)*20;
		vertex.z = Math.round((1000 * Math.random() - 500)/20)*20;
		geometry.vertices.push( vertex );
	}
	
	particles = new THREE.Points( geometry, material );
	particles.sortParticles = true;
	scene.add( particles );
}
	requestAnimationFrame( draw );

	setup();
	draw();