class auto
{
    constructor(pathFOLDER, pathOBJ, pathMTL, jugador)
    {
       
        loadOBJWithMTL(pathFOLDER, pathOBJ, pathMTL, (object) => {
            object.scale.x = jugador.spectatorScl.x;
            object.scale.y = jugador.spectatorScl.y;
            object.scale.z = jugador.spectatorScl.z;
            //object.name= "carroX";
            
            object.rotation.x = jugador.spectatorRot.x;
            object.rotation.y = jugador.spectatorRot.y;
            object.rotation.z = jugador.spectatorRot.z;
            
            object.position.x = jugador.spectatorPos.x;
            object.position.y = jugador.spectatorPos.y;
            object.position.z = jugador.spectatorPos.z;

            object.auxRot = new THREE.Vector3(0, object.rotation.y, 0);
            //maxRot (0 = izq, 1 = der)
            object.maxRot = [];
            //1.7,1.2
            object.maxRot[0] = new THREE.Vector3(0, 3,0);
            object.maxRot[1] = new THREE.Vector3(0, 0,0);
            /*
            object.position.z = -1;
            object.position.y -= 5;
            */
            //object.position.x -= 1;
            
            //object.name= "carroX";
            
            //this.modelo = object.clone();
            object.name= "auto-player-" + jugador.id;
            jugador.modelo = object;
            //this.jugador.add(this.modelo);
            jugador.camPlayer.add(jugador.modelo);

            //jugador.modelo = object;
            //jugador.camPlayer.add(jugador.modelo);
           // scene.add(object);
            
            //object.add(camara);
            isWorldReady.push(true);
    
        });
        
    }
}