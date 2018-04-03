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

function crear_pista()
{ 
		
		loadOBJWithMTL("assets/maps/", "calle.obj", "calle.mtl", (objetoCargado) => {
			//Aqui tenemos al OBJ
			//cargado y como objeto de THREEJS (Object3D)
			//Verificar luz especular en el material Kd que no esté en 0
			
			objetoCargado.position.y = 0;
			objetoCargado.position.z = -100;
			objetoCargado.scale.x = 20;
			objetoCargado.scale.y = 20;
			objetoCargado.scale.z = 20;
			
			var total = 50;
			for(var i = 0; i < total; i++)
			{
				pista[i] = objetoCargado.clone();
				pista[i].position.z -= (400*i); 
				scene.add(pista[i]);
			}	
			
			isWorldReady.push(true);
		});
}
function crear_cielo()
{
	loadOBJWithMTL("assets/ambient/sky/", "skysphere.obj", "skysphere.mtl", (objetoCargado) => 
	{
	
		objetoCargado.scale.x = 210;
		objetoCargado.scale.y = 210;
		objetoCargado.scale.z = 210;

		
		objetoCargado.position.x = 0;
		objetoCargado.position.y = 0;
		objetoCargado.position.z = -9980;

		var i = 0;
		sky[i] = objetoCargado.clone();
		
		scene.add(sky[i]);
		
		isWorldReady.push(true);
	});
}
function crear_arboles()
{ 
		
		loadOBJWithMTL("assets/ambient/", "Tree.obj", "Tree.mtl", (objetoCargado) => {
			//Aqui tenemos al OBJ
			//cargado y como objeto de THREEJS (Object3D)
			//Verificar luz especular en el material Kd que no esté en 0
			
			/*
			objetoCargado.position.y = -10;
			objetoCargado.position.z = -100;*/
			

			
		

			objetoCargado.scale.x = 10;
			objetoCargado.scale.y = 10;
			objetoCargado.scale.z = 10;

			objetoCargado.position.x = 0;
			objetoCargado.position.y = 0;
			objetoCargado.position.z = 0;
			
			var total = 200;
			var pos = 125;
			for(var j = 0; j < 2; j ++)
			{ 
				for(var i = 0; i < total; i++)
				{
					arbol[i] = objetoCargado.clone();
					arbol[i].position.z = -(100*i);
					arbol[i].position.x =  pos;
					
					scene.add(arbol[i]);
				}	
				pos = -125;
			}

			/*for(var i = 0; i < total; i++)
				{
					arbol[i] = objetoCargado.clone();
					arbol[i].position.z -= (100*i);

					if(i%2)
						arbol[i].position.x = 125;
					else
						arbol[i].position.x = -125;

					scene.add(arbol[i]);
				}	*/

			//scene.add(objetoCargado);
			isWorldReady.push(true);
		});
}
function crear_montanias()
{
	loadOBJWithMTL("assets/ambient/", "lowpolymountains.obj", "lowpolymountains.mtl", (objetoCargado) => {
		//Aqui tenemos al OBJ
		//cargado y como objeto de THREEJS (Object3D)
		//Verificar luz especular en el material Kd que no esté en 0
		
		/*
		objetoCargado.position.y = -10;
		objetoCargado.position.z = -100;*/
		

		
	

		objetoCargado.scale.x = 25;
		objetoCargado.scale.y = 25;
		objetoCargado.scale.z = 25;

		objetoCargado.position.x = 0;
		objetoCargado.position.y = 0;
		objetoCargado.position.z = 0;
		
		
var total = 40;
var pos = 210;
var rot = -90;
for(var j = 0; j < 2; j++)
{
	for(var i = 0; i < total; i++)
	{
		montanias[i] = objetoCargado.clone();
		montanias[i].position.z = -(500*i);
		
		montanias[i].rotation.y = THREE.Math.degToRad(rot);
		montanias[i].position.x = pos;
		
		scene.add(montanias[i]);
	}
	pos = -210;
	rot = 90;
 }		

		
		



		
			
		

		//scene.add(objetoCargado);
		isWorldReady.push(true);
	});
}
function crear_llantas (tipo)
{
	//NO TERMINADO
	var mod = "";
	var mat = "";
	/*
	//debugger;
		switch(tipo)
		{ 
			case 1:
				mod = "llanta_izq.obj";
				mat = "llanta_izq.mtl";
			break;
			case 2:
				mod = "llanta_izq.obj";
				mat = "llanta_izq.mtl";
			break;
			default: return; break;
		}
	*/
	mod = "llanta_izq.obj";
	mat = "llanta_izq.mtl";

	
		
		loadOBJWithMTL("assets/cars/bmw/", mod, mat, (objetoCargado) => {
			//Aqui tenemos al OBJ
			//cargado y como objeto de THREEJS (Object3D)
			//Verificar luz especular en el material Kd que no esté en 0
			
			/*
			objetoCargado.position.y = -10;
			objetoCargado.position.z = -100;*/
	
			objetoCargado.scale.x = 1;
			objetoCargado.scale.y = 1;
			objetoCargado.scale.z = 1;
	
			objetoCargado.rotation.x = 0;
			objetoCargado.rotation.y = new THREE.Vector3(0, THREE.Math.degToRad(90), 0);
			objetoCargado.rotation.z = 0;

			objetoCargado.position.x = 0;
			objetoCargado.position.y = 0;
			objetoCargado.position.z = 0;

			
			
			llanta[0] = objetoCargado;
			/*llanta[1] = objetoCargado.clone();
			llanta[2] = objetoCargado.clone();
			llanta[3] = objetoCargado.clone();*/
/*
			llanta[0].position = jugador[0].camPlayer.position;
			llanta[1].position = jugador[0].camPlayer.position;
			llanta[2].position = jugador[0].camPlayer.position;
			llanta[3].position = jugador[0].camPlayer.position;
*/
			/*llanta[0].position.x = jugador[0].camPlayer.position.x;
			llanta[0].position.y = jugador[0].camPlayer.position.y;
			llanta[0].position.z = jugador[0].camPlayer.position.z;*/
			/*
			llanta[1].position.x -= 1;
			llanta[0].position.z += 1;
			llanta[2].position.x += 1;
			llanta[0].position.z -= 1;
			llanta[3].position.x -= 1;
			llanta[0].position.z -= 1;
			*/
			llanta[0].name = "llanta_01";
			scene.add(llanta[0]);
			/*scene.add(llanta[1]);
			scene.add(llanta[2]);
			scene.add(llanta[3]);*/
			//scene.add(objetoCargado);
	
	
			//scene.add(objetoCargado);
			isWorldReady.push(true);
		});
	
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