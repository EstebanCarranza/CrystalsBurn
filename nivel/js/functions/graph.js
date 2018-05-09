
		jugador[0] = new Jugador(0, movement, velocity,
			translate,
			scale,
			rotation,
			["player1"]
			);

		jugador[1] = new Jugador(1, movement, velocity,
			translate,
			scale,
			rotation,
			["player2"]
			);

		jugador[2] = new Jugador(2, movement, velocity,
			translate,
			scale,
			rotation,
			["player3"]
			);

		jugador[3] = new Jugador(3, movement, velocity,
			translate,
			scale,
			rotation,
			["player4"]
			);

		
		function init() {
			
			
			//carpeta, OBJ, MTL, player
			new auto("assets/cars/bmw/", "bmw_m3_gtr.obj", "bmw_m3_gtr.mtl", jugador[0]);
			new auto("assets/cars/bmw/", "bmw_m3_gtr.obj", "bmw_m3_gtr.mtl", jugador[1]);
			new auto("assets/cars/bmw/", "bmw_m3_gtr.obj", "bmw_m3_gtr.mtl", jugador[2]);
			new auto("assets/cars/bmw/", "bmw_m3_gtr.obj", "bmw_m3_gtr.mtl", jugador[3]);
			
			
			//debugger;
			/*
			obj2 = obj.clone();
			obj2.position.y += 2;
			scene.add(obj2);*/

			//jugador[1].modelo = bmw;
			//scene.add(jugador[1].modelo);
			//jugador[1].camPlayer.add(jugador[1].modelo);

		}
		$(document).ready(function () {
			
			$("#menu-pausa").hide();
			$("#estatus-player").hide();
			$("#empezarJuego").attr("disabled", true);

			$("#empezarJuego").click(function () {
				$("#menu").remove();
				
			});
			$("#velMaxBtn").click(function(){
				var jfl = $("#velMax").val();
				jfl = parseFloat(jfl);
				//debugger;
				if(!isNaN(jfl))
				{
					jugador[0].forwardLimit = jfl;
				}
				
				if ($('#LOGS').prop('checked')) {
				$("#canvas-GUI").hide();
			}else $("#canvas-GUI").show();
			});
			$("#btnContinuar").click(function(){

				$("#menu-pausa").hide();
			});
		
			menuPausa();

			enableGamepads();

			//setupScene(1, "scene-section");
				setupSceneForViewport(0, "scene-section-01", 30, 8, -1.5);

			if (players >= 2)
				setupSceneForViewport(1, "scene-section-02", 10, 8, -1.5);
			if (players >= 3)
				setupSceneForViewport(2, "scene-section-03", -10, 8, -1.5);

			//jugadorX = new Jugador(3, -10, 5, -10);

			if (players >= 4)
				setupSceneForViewport(3, "scene-section-04", -30, 8, -1.5);

			//cargar_cajas();
			//cargar_carro(0, jugador[0]);
			init();
			nivel_02(1);
			//crear_llantas();

			document.addEventListener('keydown', onKeyDown);
			document.addEventListener('keyup', onKeyUp);

			//alert("OK");
			render();

			
		});



		function onKeyDown(event) {
			//console.log(String.fromCharCode(event.keyCode));
			keys[String.fromCharCode(event.keyCode)] = true;

		}
		function onKeyUp(event) {
			keys[String.fromCharCode(event.keyCode)] = false;
		}

		


		function ValidateAllLoadedModels(isWorldReadyLocal) {
			$("#messages").html(isWorldReady.length);
			var complete = true;
			for (var i = 0; i < isWorldReadyLocal.length; i++)
				complete = complete * isWorldReadyLocal[i];
				
			
			if (!complete)
				alert("Cuidado, hay modelos que no cargaron!");

			return complete;
		}

		
		function contador_inicial()
		{
			if(seconds >= 0)
				{
					if(retrasoSec < 0)
					{
						if(seconds == 0)
						{
							$(".estatus-player").text("¡Start!");
							carrera_iniciada = true;
						}
						else
							$(".estatus-player").text(seconds);

						$(".estatus-player").show();
						
						retrasoSec = retrasoSecAux;
						seconds -= 1;
					}
					else
						retrasoSec -= 1;
					
					if(retrasoSec == 0)
						$(".estatus-player").hide(100);
				}
				else
					$(".estatus-player").hide(100);
		}


		function ordenar()
		{
			var item = 
			[
				{id :jugador[0].id, progreso: jugador[0].progreso},
				{id :jugador[1].id, progreso: jugador[1].progreso},
				{id :jugador[2].id, progreso: jugador[2].progreso},
				{id :jugador[3].id, progreso: jugador[3].progreso}
			];
			var aux = 
			[
				{id:0, progreso:0}
			];
			for(var i = 0; i < 4; i++)
			for(var j = 0; j< 3; j++)
			{
				/*debugger;*/
				//comparamos
				if(item[j].progreso < item[j+1].progreso){
						//guardamos el numero mayor en el auxiliar
						aux[0].progreso = item[j].progreso;
						aux[0].id = item[j].id;

						//guardamos el numero menor en el lugar correspondiente
						item[j].progreso = item[j+1].progreso;
						item[j].id = item[j+1].id;

						//asignamos el auxiliar en el lugar correspondiente
						item[j+1].progreso = aux[0].progreso;
						item[j+1].id = aux[0].id;
		
				}
			}
		
			for(var i = 0; i< 4; i++)
				jugador[item[i].id].place = i+1;
			

			for(var i = 0; i < 4; i++)
			{
				$(".name-player-0"+i).text(jugador[item[i].id].name);
				switch(jugador[item[i].id].place)
				{
					case 0: place = "N/A"; break;
					case 1: place = "1st"; break;
					case 2: place = "2nd"; break;
					case 3: place = "3rd"; break;
					default: place = (jugador[i].place + "th"); break;
				}
				$(".place-0"+i).text(place);
			}
			
			return item;
		}

