function colsion_principales(activar)
{
    if(activar)
    {
        for (var j = 0; j < players; j++)
            for (var i = 0; i < jugador[j].rayos.length; i++) {
                //Param1: desde donde lanzamos el rayo (vector)
                //Param2: hacia donde (direccion del vector)
/*
                var vectorN = new THREE.Vector3(
                    jugador[j].camPlayer.position.x + jugador[j].camPlayer.children[0].position.x, 
                    jugador[j].camPlayer.position.y + jugador[j].camPlayer.children[0].position.y, 
                    jugador[j].camPlayer.position.z + jugador[j].camPlayer.children[0].position.z
                );
                */
               /*
                var vectorN = new THREE.Vector3(
               jugador[j].camPlayer.position.x,
               jugador[j].camPlayer.position.y,
               jugador[j].camPlayer.position.z + 10
                );
                */
                //jugador[j].camPlayer.position
                jugador[j].raycaster.set(jugador[j].camPlayer.position, jugador[j].rayos[i]);

                //Verificamos si existe la colisión
                //Param1: Objeto(s) "colisionables"
                //Param2: Si queremos validar la colisión con los hijos 
                /*
                    para objetos
                        var colisiones = raycaster.intersectObject(objeto);
                    para arreglos
                        var colisiones = raycaster.intersectObjects(objetosConColision, false);

                    para colision con hijos
                    var colisiones = raycaster.intersectObjects(objetosConColision, true);

                */
              // debugger;
                var colisiones = jugador[j].raycaster.intersectObjects(cristales, true);

                //si el arreglo es mayor a cero entonces si hay colision
               // debugger;
                if (colisiones.length > 0 && colisiones[0].distance < 20) {
                    jugador[j].colision = true;
                    console.log("player" + j + " colisionando " + jugador[j].colision);
                    if(!colisiones[0].object.parent.tomado)
                    {
                        scene.remove(colisiones[0].object.parent);
                        jugador[j].totalCristales += 1;
                        colisiones[0].object.parent.tomado = true;
                    }
                }
                else jugador[j].colision = false;
                
                var colision_speedUP = jugador[j].raycaster.intersectObjects(speedUP, true);
                if (colision_speedUP.length > 0 && colision_speedUP[0].distance < 20) {
                    jugador[j].forwardLimit = 250;
                }
                var colision_limites = jugador[j].raycaster.intersectObjects(limites, true);
                if (colision_limites.length > 0 && colision_limites[0].distance < 20) {
                    jugador[j].forwardLimit = -20;
                }
                
            }
    }
}