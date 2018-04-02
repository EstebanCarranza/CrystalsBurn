function cargar_cajas()
{
    loadOBJWithMTL("assets/", "box.obj", "box.mtl", (objetoCargado) => {
		//Aqui tenemos al OBJ
		//cargado y como objeto de THREEJS (Object3D)
		//Verificar luz especular en el material Kd que no esté en 0
		
		var total = 8;
		for(var i = 0; i < total; i++)
			cajaX[i] = objetoCargado.clone();
		
		cajaX[0].position.x = -30; cajaX[0].position.y =  0; cajaX[0].position.z =   0; 
		cajaX[0].rotation.y = THREE.Math.degToRad(-90);
		cajaX[1].position.x = -30; cajaX[1].position.y =  0; cajaX[1].position.z =  30; 
		cajaX[2].position.x = -30; cajaX[2].position.y =  0; cajaX[2].position.z = -30; 
		cajaX[3].position.x =  30; cajaX[3].position.y =  0; cajaX[3].position.z =   0; 
		cajaX[3].rotation.y = THREE.Math.degToRad(-90);
		cajaX[4].position.x =  30; cajaX[4].position.y =  0; cajaX[4].position.z =  30; 
		cajaX[5].position.x =  30; cajaX[5].position.y =  0; cajaX[5].position.z = -30; 
		cajaX[6].position.x =   0; cajaX[6].position.y =  0; cajaX[6].position.z =  30; 
		cajaX[7].position.x =   0; cajaX[7].position.y =  0; cajaX[7].position.z = -30;  

		for(var i = 0; i < total; i++)
		{
			scene.add(cajaX[i]);
			objetosConColision.push(cajaX[i]);
		}
		
		isWorldReady.push(true);
	});
}

class OBJ_modelX
{
	constructor(pathFOLDER, pathOBJ, pathMTL, modelo, spectatorPos, spectatorScl, spectatorRot)
	{
		loadOBJWithMTL(pathFOLDER, pathOBJ, pathMTL, (objetoCargado) => {
			//Aqui tenemos al OBJ
			//cargado y como objeto de THREEJS (Object3D)
			//Verificar luz especular en el material Kd que no esté en 0
			objetoCargado.scale.x = spectatorScl.x;
			objetoCargado.scale.y = spectatorScl.y;
			objetoCargado.scale.z = spectatorScl.z;
			

			objetoCargado.position.x = spectatorPos.x;
			objetoCargado.position.y = spectatorPos.y;
			objetoCargado.position.z = spectatorPos.z;


			objetoCargado.rotation.x = spectatorRot.x;
			objetoCargado.rotation.y = spectatorRot.y;
			objetoCargado.rotation.z = spectatorRot.z;

			scene.add(objetoCargado);

			//debugger;
			
			isWorldReady.push(true);
		});
	}
}
class OBJ_Terrain
{
	constructor(pathFOLDER, pathOBJ, pathMTL, modelo, spectatorPos, spectatorScl, spectatorRot)
	{
		
		loadOBJWithMTL(pathFOLDER, pathOBJ, pathMTL, (objetoCargado) => {
			//Aqui tenemos al OBJ
			//cargado y como objeto de THREEJS (Object3D)
			//Verificar luz especular en el material Kd que no esté en 0
			objetoCargado.scale.x = spectatorScl.x;
			objetoCargado.scale.y = spectatorScl.y;
			objetoCargado.scale.z = spectatorScl.z;
			

			objetoCargado.position.x = spectatorPos.x;
			objetoCargado.position.y = spectatorPos.y;
			objetoCargado.position.z = spectatorPos.z;


			objetoCargado.rotation.x = spectatorRot.x;
			objetoCargado.rotation.y = spectatorRot.y;
			objetoCargado.rotation.z = spectatorRot.z;

			scene.add(objetoCargado);

			//debugger;
			
			isWorldReady.push(true);
		});
	}
}
function cargar_carro(screenID, jugador)
{
    
    loadOBJWithMTL("assets/bmw/", "BMW_M3_GTR.obj", "BMW_M3_GTR.mtl", (object) => {
        object.scale.x = 0.001;
        object.scale.y = 0.001;
        object.scale.z = 0.001;
        //object.name= "carroX";
        
        object.position.z = -1;
		object.rotation.y += THREE.Math.degToRad(90);
		object.position.y -= 5;
		//object.position.x -= 1;
		
		///object.name= "carroX";
		
		jugador.modelo = object;
		jugador.camPlayer.add(jugador.modelo);
       // scene.add(object);
        
        //object.add(camara);
        isWorldReady.push(true);

    });
}