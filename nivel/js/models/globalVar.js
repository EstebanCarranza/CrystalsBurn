var scene;
		var renderer;
		//var viewports = [];
		//var camPlayers = [];
		//NECESARIOS 
		var clock;
		var deltaTime;
		var keys = {};
		var isWorldReady = [];
		var debug = true;
		var total = 0;
		var complete = false;
		var place = "";
		var maxPlayer;
		var seconds = 3;
		var retrasoSec = 0;
		var retrasoSecAux = 10;

		//PERSONAJE PRINCIPAL
		var players = 4;
		var jugador = [];
		var camPosition = "";
		var carPosition = "";

		/*
			new Jugador
			(
				id, forwardLimit, yawLimit, leftRightLimit, topBottomLimit, velMax, velMin, 
				spectatorPos, [Vector3]
				spectatorScl, [Vector3]
				spectatorRot  [Vector3]
			);
		*/
		//var movement = [forwardLimit, yawLimit, leftRightLimit, topBottomLimit, sensRot]
		var movement = [-5, 1, 0.001, 1, 5];
		//var velocity = [velMin, velInc, velMax, velFreno];
		var velocity = [0, 1, 250, 10];
		//var translate = new THREE.Vector3(1, -3.5, 0.5); // dentro del coche
		var translate = new THREE.Vector3(0, -6, -15); // fuera del coche
		//var scale = new THREE.Vector3(0.002, 0.002, 0.002);
		var scale = new THREE.Vector3( 1, 1, 1);
		var rotation = new THREE.Vector3(0, THREE.Math.degToRad(90), 0);

		//ESCENARIO
		var pista = [];
		var pistaEsquina = [];
		var arbol = [];
		var objetosConColision = [];
		var montanias = [];
		var sky = [];
		var final = -19350;
		var obj;
		var obj2;
		var llanta = [];
		var cajaX = [];
		var carrera_iniciada = false;
		var level_leaderboard;
		var pausa;
		var totalCristales = 5;
		var cristales = [];
		var speedUP = [];
		var limites = [];
		var obstaculos = [];

		

		