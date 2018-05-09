
function inicializar_luces()
{
var ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 1.0);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(new THREE.Color(0.2, 0.5, 0.4), 1.0);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);
}