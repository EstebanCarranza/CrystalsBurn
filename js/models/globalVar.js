var scene;
		var renderer;
		//var viewports = [];
		//var camPlayers = [];
		var players = 4;
		var clock;
		var deltaTime;
		var keys = {};
		var isWorldReady = [];
		var cajaX = [];
		var pista = [];
		var arbol = [];
		var debug = true;
		var objetosConColision = [];
		var jugador = [];
		var montanias = [];
		var sky = [];
		var final = -19350;
		var obj;
		var obj2;
		var llanta = [];
		var camPosition = "";
		var carPosition = "";
		var total = 0;
		var complete = false;
		var place = "";
		var maxPlayer;
		var seconds = 3;
		var retrasoSec = 0;
		var retrasoSecAux = 10;
		var carrera_iniciada = false;
		var level_leaderboard;
		var pausa;

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
		var velocity = [0, 1, 500, 10];
		//var translate = new THREE.Vector3(1, -3.5, 0.5); // dentro del coche
		var translate = new THREE.Vector3(0, -6, -15); // fuera del coche
		//var scale = new THREE.Vector3(0.002, 0.002, 0.002);
		var scale = new THREE.Vector3( 1, 1, 1);
		var rotation = new THREE.Vector3(0, THREE.Math.degToRad(90), 0);
		