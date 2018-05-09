function render() {

    total = requestAnimationFrame(render);

    var skysphere = scene.getObjectByName("skysphere");
    skysphere.rotation.y += THREE.Math.degToRad(0.1);

    if (total <= 200) {

        $("#cargando").text("Cargando..." + (total / 2) + "%");
        $("#pgb-render").val(total);
        

    } else {
        
        $("#cargando").text("Carga completada!");
        $("#empezarJuego").attr("disabled", false);
        $("#menu").remove();
        complete = true;
    }
    deltaTime = clock.getDelta();
    if (ValidateAllLoadedModels(isWorldReady) && complete) 
    {
        keysPlayers();	
        contador_inicial();

        for (var i = 0; i < players; i++) 
        {
            
            if(jugador[i].forwardLimit < 0)
                $("#velocimetro-0"+i).text("Reverse");
            else
                $("#velocimetro-0"+i).text((jugador[i].forwardLimit/2).toFixed(0) + " Km/h");
            
            $("#name-player-0"+i).text(jugador[i].name);

            if(jugador[i].progreso <= 100)
                jugador[i].progreso = ((jugador[i].camPlayer.position.z/final)*100).toFixed(2);
            
            var posicion = "<br>[" +
                jugador[i].camPlayer.position.x + "," +
                jugador[i].camPlayer.position.y + "," +
                jugador[i].camPlayer.position.z + "]" +
                "<br>"
                ;
            $("#progreso-0"+i).html(jugador[i].progreso + "% " + posicion);
            $("#total-cristales-0"+i).text(jugador[i].totalCristales);
            
            level_leaderboard = ordenar();
                
            
        }

        for (var j = 0; j < players; j++)
            for (var i = 0; i < jugador[j].rayos.length; i++) {
                //Param1: desde donde lanzamos el rayo (vector)
                //Param2: hacia donde (direccion del vector)

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
                var colisiones = jugador[j].raycaster.intersectObjects(objetosConColision, true);

                //si el arreglo es mayor a cero entonces si hay colision
                if (colisiones.length > 0 && colisiones[0].distance < 1) {
                    jugador[j].colision = true;
                    console.log("player" + j + " colisionando " + jugador[j].colision);

                    //jugador[j].camPlayer.translateZ(-jugador[j].forwardLimit * deltaTime);
                    //jugador[j].forward = jugador[j].forwardLimit;
                    

                }
                else
                {
                    jugador[j].colision = false;
                    //console.log("player" + j + " colisionando " + jugador[j].colision);
                }
            }
        for (var i = 0; i < players; i++) {
            jugador[i].camPlayer.rotation.y += jugador[i].yaw * deltaTime;
            jugador[i].camPlayer.translateZ(jugador[i].forward * deltaTime);
            jugador[i].camPlayer.translateX(jugador[i].leftRight);
            jugador[i].camPlayer.translateY(jugador[i].topBottom);

        }

        
    }

    //debugger;
    for (var i = 0; i < players; i++)
        jugador[i].viewport.render(scene, jugador[i].camPlayer);

    /*if(jugador[3].viewport.render!=null)
        $("#test-00").text("OK");*/
    //debugger;

    //debugger;
    //$("#test-00").text(render.arguments[0]);

}

var borde = [-5, -5];

function setupSceneForViewport(screenID, objectID, posX, posY, posZ) {

    switch (players) {
        case 1:
            var visibleSize = { width: window.innerWidth, height: window.innerHeight };
            break;
        case 2:
            var visibleSize = { width: ((window.innerWidth / 2) + borde[0]), height: window.innerHeight };
            break;
        case 3:
            var visibleSize = { width: ((window.innerWidth / 2) + borde[0]), height: (window.innerHeight / 2) + borde[1] };
            break;
        case 4:
            var visibleSize = { width: ((window.innerWidth / 2) + borde[0]), height: (window.innerHeight / 2) + borde[1] };
            break;
        default:
            var visibleSize = { width: window.innerWidth, height: window.innerHeight };
            break;
    }


    $("#cvP" + screenID).width(visibleSize.width);
    $("#cvP" + screenID).height(visibleSize.height);


    //var visibleSize = { width: 100, height: 100};

    clock = new THREE.Clock();
    scene = new THREE.Scene();
    //camPlayers[0] = new THREE.PerspectivecamPlayers[0](75, visibleSize.width / visibleSize.height, 0.1, 100);
    jugador[screenID].camPlayer = new THREE.PerspectiveCamera(75, visibleSize.width / visibleSize.height, 0.1, 20500);
    jugador[screenID].camPlayer.position.x = posX;
    jugador[screenID].camPlayer.position.y = posY;
    jugador[screenID].camPlayer.position.z = posZ;
    jugador[screenID].camPlayer.name = "player" + screenID;

    jugador[screenID].viewport = new THREE.WebGLRenderer({ precision: "mediump" });
    //renderer.setClearColor(new THREE.Color(0, 0, 0));
    jugador[screenID].viewport.setClearColor(new THREE.Color(0.1, 0.5, 0.6));
    jugador[screenID].viewport.setPixelRatio(visibleSize.width / visibleSize.height);
    jugador[screenID].viewport.setSize(visibleSize.width, visibleSize.height);

   inicializar_luces();
    var grid = new THREE.GridHelper(50, 10, 0xffffff, 0xffffff);
    grid.position.y = -1;
    scene.add(grid);


    //scene.add(jugador[0].modelo);
    //jugador[0].modelo.add(jugador[0].camPlayer);
    
    /*var pl = jugador[0].modelo;
    pl.add(jugador[0].camPlayer);*/

    for (var i = 0; i < players; i++)
        scene.add(jugador[i].camPlayer);


    $("#" + objectID).append(jugador[screenID].viewport.domElement);
}

