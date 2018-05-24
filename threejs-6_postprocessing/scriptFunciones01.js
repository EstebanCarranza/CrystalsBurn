function aJuego(){
	window.open("../game.html","_self");
}

function aInicio(){
	window.open("index.html","_self");
}

function aOpciones(){
	window.open("opConfig.html","_self");
}

function aPuntuaciones(){
	window.open("puntuaciones.html","_self");
}

function aJugar(){
	window.open("menuJugar.html","_self");
}

function aRegistro(){
	window.open("crearCuenta.html","_self");
}//640 x 360  960 x 540  window.innerWidth, height: window.innerHeight

function shmenu(){
	$("#menuPausaID").toggle();
	if(stopCounter == 0){
		stopCounter = 1;
	} else {
		stopCounter = 0;
		render();
	}
}

function aJugarFG(){
	window.open("pg/menuJugar.html","_self");
}

//FUNCIONES DE LA BASE DE DATOS

function salvaUsuario(){
	debugger;
	var alias = $("#aliasRU").val();
	var correo = $("#loemail").val();
	var contra = $("#locontra").val();

	if(alias == ""){
		alert("Falta escribir el nombre de usuario");
	} else if(correo == ""){
		alert("Falta escribir el correo");
	} else if(contra == ""){
		alert("Falta escribir la contraseña");
	} else {
		//Primero va a validar que el correo y el alias NO se repitan en la base de datos
		var dataToSend = { action:"revisaAC", alias: alias, correo: correo };
		$.ajax({
			url: '../php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			success: function(response){
				if(response != ""){//Si hay respuesta es que se repite uno
					alert(response);
				}else{//No se repite
					salvaUsuario2(alias, correo, contra);
				}
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function salvaUsuario2(alias, correo, contra){
	//debugger;
	var alias = alias;
	var correo = correo;
	var contra = contra;
	
	if(alias == ""){
		alert("Falta escribir el nombre de usuario");
	} else if(correo == ""){
		alert("Falta escribir el correo");
	} else if(contra == ""){
		alert("Falta escribir la contraseña");
	} else {
		//Ahora ya los registra
		var dataToSend = { action:"registroU", alias: alias, correo: correo, contra: contra };

		$.ajax({
			url: '../php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			success: function(response){
				alert(response);
				aInicio();
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function login(){
	var correo = $("#loemail").val();
	var contra = $("#locontra").val();

	if(correo == ""){
		alert("Falta escribir el correo");
	} else if(contra == ""){
		alert("Falta escribir la contraseña");
	} else {
		var dataToSend = { action:"logear", correo: correo, contra: contra };

		$.ajax({
			url: '../php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			success: function(response){

				if(response > 0){
					//alert("Si hay usuario " + response);
					localStorage.setItem("usuID", response);
					aJugar();
				} else {
					//alert("No hay usuario " + response);
					alert(response);
				}


				//alert(response);
				//localStorage.setItem("usuID", response);
				//aJugar();
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function saveScore(){
	var idU = $("#UsuID").val();
	var score = $("#ScoreID").val();

	if(idU != "0" || score != "0"){
		var dataToSend = { action:"registraPunto", idU: idU, score: score };
		$.ajax({
			url: 'php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			success: function(response){
				//alert(response);
				//$("#Pbienvenida").text("¡Bienvenido " + response + "!");
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function getScore(){
	//debugger;
	var idU = $("#UsuID").val();
	if(idU != "0"){
		var dataToSend = { action:"traePunto", idU: idU };
		$.ajax({
			url: '../php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			dataType: 'json',
			success: function(response){
				//alert(response);
				var numItems = response.length;
				//alert("Items: " + numItems);
				for(var i = 0; i < numItems; i++){
					//console.log(JSON.stringify(response[i]));
					var cosa = JSON.stringify(response[i]);
					var cosaDos = cosa.split('"');
					console.log(cosaDos);
					//debugger;
					if(cosaDos.length > 3){
						$("#listOne").append("<li>" + cosaDos[3] + "</li>");
					}/* else {
						$("#listOne").append("<li>" + "No haz jugado aun" + "</li>");
					}*/
					//$("#listTwo").append("<li>" + cosaDos[3] + "</li>");
				}
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function getGlobalScore(){
	//debugger;
	var idU = $("#UsuID").val();
	if(idU != "0"){
		var dataToSend = { action:"traeGloPunto", idU: idU };
		$.ajax({
			url: '../php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			dataType: 'json',
			success: function(response){
				//alert(response);
				var numItems = response.length;
				//alert("Items: " + numItems);
				for(var i = 0; i < numItems; i++){
					//console.log(JSON.stringify(response[i]));
					var cosa = JSON.stringify(response[i]);
					var cosaDos = cosa.split('"');
					console.log(cosaDos);
					//$("#listOne").append("<li>" + cosaDos[3] + "</li>");
					$("#listTwo").append("<li>" + cosaDos[3] + "</li>");
				}
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function getAlias(){
	//debugger;
	var idU = $("#UsuID").val();

	if(idU != "0"){
		var dataToSend = { action:"GetAlias", idU: idU };

		$.ajax({
			url: '../php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			success: function(response){
				//alert(response);
				$("#Pbienvenida").text("¡Te damos la bienvenida " + response + "!");
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function cerrarSesion(){
	localStorage.removeItem("usuID");
	localStorage.removeItem("color");
	localStorage.removeItem("musica");
	localStorage.removeItem("colorArchivo");
	localStorage.removeItem("musicaArchivo");
	aInicio();
}

function guardaPreferencia(){
	var radioColor = $("input[name='color']:checked").val();
	//alert("Radio color checked: " + radioColor);

	var radioMusica = $("input[name='musica']:checked").val();
	//alert("Radio musica checked: " + radioMusica);

	localStorage.setItem("color", radioColor);

	localStorage.setItem("musica", radioMusica);

	aJugar();
}

function getColor(id){
	var idC = id;

	if(idC != "0"){
		var dataToSend = { action:"getColor", idC: idC };

		$.ajax({
			url: 'php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			success: function(response){
				localStorage.setItem("colorArchivo", response);
				//alert("Color: " + response);
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

function getMusica(id){
	var idM = id;

	if(idM != "0"){
		var dataToSend = { action:"getMusica", idM: idM };

		$.ajax({
			url: 'php/bdc.php',
			async: true,
			type: 'POST',
			data: dataToSend,
			success: function(response){
				localStorage.setItem("musicaArchivo", response);
				//alert("Musica: " + response);
			},
			error: function(x, y, z){
				alert("Error: " + JSON.stringify(x) + JSON.stringify(y) + JSON.stringify(z));
			}
		});
	}
}

/*
TO DO:

DONE -Checar si el correo o alias existen; si es así, que no continúe y lance un aviso al usuario
DONE -Seguir con la validación del log in
DONE -Que mantenga in al usuario
DONE -Las preferencias (2:30 - 3:30) -> En sesión, NO usuario

-Jugabilidad (+ colision, animacion) (3:30 - 4:30)
-Partículas (4:30 - 5:30)
-Puntuación (5:30 - 6:30)

-Compartir en facebook (6:30 - 7:30)
-Host (7:30 - 8:30)
-Grabar en disco (Creo que no se ocupa .-. )

Time left: 6 Horas

*/