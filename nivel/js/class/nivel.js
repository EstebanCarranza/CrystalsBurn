class niveles
{
    constructor(idNivel, calles, montanias, arboles, skysphere)
    {
        this.idNivel = idNivel;
        this.calles = calles;
        this.montanias = montanias;
        this.arboles = arboles;
        this.skysphere = skysphere;
        this.calleIzquierda = -580;
        this.calleDerecha = -580;
        this.calleFrente = -2569;
        this.calleAtras = 390;
    }
};
var nivel = [];
nivel[0] = new niveles(1, 10, 10, 10, 210);
nivel[1] = new niveles(2, 7,5,20, 50);
function nivel_01()
{
    crear_cielo();
    crear_pista();
    crear_arboles();
    crear_montanias();
}
function nivel_02(id)
{

    
    //SKYSPHERE **********************************************************************************
    loadOBJWithMTL("assets/ambient/sky/", "skysphere.obj", "skysphere.mtl", (objetoCargado) => 
	{
    
        objetoCargado.scale.set (nivel[id].skysphere, nivel[id].skysphere, nivel[id].skysphere);
		objetoCargado.position.set(-290,0,-1284);
		
		var i = 0;
		sky[i] = objetoCargado.clone();
		sky[i].name ="skysphere";
		scene.add(sky[i]);
		
		isWorldReady.push(true);
    });
    //BANDERA GANAR ******************************************************************************
    loadOBJWithMTL("assets/maps/bandera_meta/", "bandera_meta.obj", "bandera_meta.mtl", (objetoCargado) => 
	{
    
        objetoCargado.scale.set (1,1,1);
        objetoCargado.position.set(0,1,0);
		objetoCargado.name = "bandera_meta";
		scene.add(objetoCargado);
		
		isWorldReady.push(true);
	});

    //CRISTALES ******************************************************************************
    loadOBJWithMTL("assets/maps/cristal/", "crystal.obj", "crystal.mtl", (objetoCargado) => 
	{
    
        objetoCargado.scale.set (0.5,0.5,0.5);
        objetoCargado.position.set(0,1,-100);
		objetoCargado.name = "crystal";
		scene.add(objetoCargado);
		
		isWorldReady.push(true);
	});
   //SPEEDUP ******************************************************************************
   loadOBJWithMTL("assets/maps/speedUp/", "speedUp.obj", "speedUp.mtl", (objetoCargado) => 
   {
   
       objetoCargado.scale.set (1,1,1);
       objetoCargado.position.set(0,1.8,-50);
       objetoCargado.name = "speedUp";
       scene.add(objetoCargado);
       
       isWorldReady.push(true);
   });

    //CALLES *************************************************************************************
    loadOBJWithMTL("assets/maps/", "calle_asfalto_linea.obj", "calle_asfalto_linea.mtl", (objetoCargado) => {
        //Aqui tenemos al OBJ
        //cargado y como objeto de THREEJS (Object3D)
        //Verificar luz especular en el material Kd que no esté en 0
        
        objetoCargado.position.y = 0;
        objetoCargado.position.z = 100;
        
        objetoCargado.scale.set(1,1,1);
        
        
        var total = 10;
        for(var i = 0; i < nivel[id].calles; i++)
        {
            objetoCargado.name = "calle" + i;
            pista[i] = objetoCargado.clone();
            pista[i].position.z -= (400*i); 
            scene.add(pista[i]);
        }	
        var total2 = nivel[id].calles * 2;
        for(var i = nivel[id].calles; i < total2; i++)
        {
            objetoCargado.name = "calle" + i;
            pista[i] = objetoCargado.clone();
            pista[i].position.x = nivel[id].calleIzquierda;
            pista[i].position.z -= (400*(i - nivel[id].calles)); 
            scene.add(pista[i]);
        }	
        var total3 = total2 + 1;
        for(var i = total2; i < total3; i++)
        {
            objetoCargado.name = "calle" + i;
            pista[i] = objetoCargado.clone();
            pista[i].rotation.y = THREE.Math.degToRad(90);
            
            pista[i].position.z = nivel[id].calleAtras;
            pista[i].position.x = -290;
            pista[i].position.x -= (400*(i - total2)); 
            scene.add(pista[i]);
        }
        var total4 = total3 + 1;
        for(var i = total3; i < total4; i++)
        {
            objetoCargado.name = "calle" + i;
            pista[i] = objetoCargado.clone();
            pista[i].rotation.y = THREE.Math.degToRad(90);
            
            pista[i].position.z = nivel[id].calleFrente;
            pista[i].position.x = -290;
            pista[i].position.x -= (400*(i - total3)); 
            scene.add(pista[i]);
        }

        isWorldReady.push(true);
    });
    loadOBJWithMTL("assets/maps/", "calle_asfalto_esquina.obj", "calle_asfalto_esquina.mtl", (objetoCargado) => {
        //Aqui tenemos al OBJ
        //cargado y como objeto de THREEJS (Object3D)
        //Verificar luz especular en el material Kd que no esté en 0
        //objetoCargado.rotation.set(0, THREE.Math.degToRad(180), 0);
        //objetoCargado.position.set(0, 2, -2390);
        
        objetoCargado.scale.set(1,1,1);
        
        pistaEsquina[0] = objetoCargado.clone();
        pistaEsquina[0].name = "calleEsquina0";
        pistaEsquina[0].rotation.set(0, THREE.Math.degToRad(90), 0);
        pistaEsquina[0].position.set(0, 2.1, 390);
        scene.add(pistaEsquina[0]);
        
        pistaEsquina[1] = objetoCargado.clone();
        pistaEsquina[1].name = "calleEsquina1";
        pistaEsquina[1].rotation.set(0, THREE.Math.degToRad(180), 0);
        pistaEsquina[1].position.set(0, 2.1, nivel[id].calleFrente);
        scene.add(pistaEsquina[1]);
       
        pistaEsquina[2] = objetoCargado.clone();
        pistaEsquina[2].name = "calleEsquina1";
        pistaEsquina[2].rotation.set(0, THREE.Math.degToRad(270), 0);
        pistaEsquina[2].position.set(nivel[id].calleIzquierda, 2.1, nivel[id].calleFrente);
        scene.add(pistaEsquina[2]);
        
        pistaEsquina[3] = objetoCargado.clone();
        pistaEsquina[3].name = "calleEsquina1";
        pistaEsquina[3].rotation.set(0, THREE.Math.degToRad(0), 0);
        pistaEsquina[3].position.set(nivel[id].calleIzquierda, 2.1, 390);
        scene.add(pistaEsquina[3]);
        
        isWorldReady.push(true);
    });

    //CREAR ARBOLES **********************************************************************
    loadOBJWithMTL("assets/ambient/", "Tree.obj", "Tree.mtl", (objetoCargado) => {
        //Aqui tenemos al OBJ
        //cargado y como objeto de THREEJS (Object3D)
        //Verificar luz especular en el material Kd que no esté en 0

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
            for(var i = 0; i < nivel[id].arboles; i++)
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
    
    //CREAR MONTANIAS ***************************************************************************************
	loadOBJWithMTL("assets/ambient/", "lowpolymountains.obj", "lowpolymountains.mtl", (objetoCargado) => {
		//Aqui tenemos al OBJ
		//cargado y como objeto de THREEJS (Object3D)
        //Verificar luz especular en el material Kd que no esté en 0
        
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
            for(var i = 0; i < nivel[id].montanias; i++)
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