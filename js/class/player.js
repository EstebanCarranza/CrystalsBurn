class Jugador {
	constructor(id, forwardLimit, yawLimit, leftRightLimit, topBottomLimit, spectatorPos, spectatorScl, spectatorRot) {
		this.id = id;
		this.forward = 0;
		this.yaw = 0;
		this.sensRot = 1;
		this.leftRight = 0;
		this.topBottom = 0;
		this.camPlayer;
		this.forwardLimit = forwardLimit;
		this.yawLimit = yawLimit;
		this.leftRightLimit = leftRightLimit;
		this.topBottomLimit = topBottomLimit;
		this.viewport;
		this.modelo;
		this.colision = false;
		this.spectatorPos = new THREE.Vector3(spectatorPos.x, spectatorPos.y, spectatorPos.z);
		this.spectatorRot = new THREE.Vector3(spectatorRot.x, spectatorRot.y, spectatorRot.z);
		this.spectatorScl = new THREE.Vector3(spectatorScl.x, spectatorScl.y, spectatorScl.z);
		this.rayos =
			[
				new THREE.Vector3(1, 0, 0),
				new THREE.Vector3(-1, 0, 0),
				new THREE.Vector3(0, 0, 1),
				new THREE.Vector3(0, 0, -1)
			];
		this.raycaster = new THREE.Raycaster();

		this.inputXpad = new mugrero(id);
	}
};

function keysForPlayer1() {
	//<PLAYER 1>

	if (
		(jugador[0].inputXpad.A[2] < jugador[0].inputXpad.sensibilidad) &&
		(!jugador[0].inputXpad.A[1] || !keys["W"])
	) {
		jugador[0].inputXpad.A[2] += 1;
		jugador[0].forward = -jugador[0].forwardLimit;
	}
	if ((!jugador[0].inputXpad.A[1] || keys["W"])) {
		jugador[0].camPlayer.children[0].rotation.y = (jugador[0].camPlayer.children[0].auxRot.y);
	}
	if (keys["A"] || (jugador[0].inputXpad.LStickLeft[1])) {
		jugador[0].inputXpad.LStickLeft[1] = false;
		//este if está para bloquear la rotación en caso de no mover el choche
		if (
			(keys["W"] || (jugador[0].inputXpad.A[1])) ||
			(keys["S"] || (jugador[0].inputXpad.X[1])) ||
			(jugador[0].inputXpad.A[2] != jugador[0].inputXpad.sensibilidad)
		) {
			jugador[0].yaw = jugador[0].yawLimit;
			if
			(
				jugador[0].camPlayer.children[0].rotation.y <
				jugador[0].camPlayer.children[0].maxRot[0].y
			)
				jugador[0].camPlayer.children[0].rotation.y += THREE.Math.degToRad(jugador[0].sensRot);
		}
	}
	else if (keys["D"] || (jugador[0].inputXpad.LStickRight[1])) {
		jugador[0].inputXpad.LStickRight[1] = false;
		//este if está para bloquear la rotación en caso de no mover el choche
		if (
			(keys["W"] || (jugador[0].inputXpad.A[1])) ||
			(keys["S"] || (jugador[0].inputXpad.X[1])) ||
			(jugador[0].inputXpad.A[2] != jugador[0].inputXpad.sensibilidad)
		) {
			jugador[0].yaw = -jugador[0].yawLimit;
			if
			(
				jugador[0].camPlayer.children[0].rotation.y >
				jugador[0].camPlayer.children[0].maxRot[1].y
			)
				jugador[0].camPlayer.children[0].rotation.y -= THREE.Math.degToRad(jugador[0].sensRot);
		}
	}

	if (keys["W"] || (jugador[0].inputXpad.A[1])) {
		//debugger;

		jugador[0].inputXpad.A[1] = false;
		if (jugador[0].inputXpad.A[2] >= (jugador[0].inputXpad.sensibilidad * -1))
			jugador[0].inputXpad.A[2] -= 1;
		jugador[0].forward = -jugador[0].forwardLimit;

	}
	else if (keys["S"] || (jugador[0].inputXpad.X[1])) {

		jugador[0].inputXpad.X[1] = false;
		jugador[0].forward = jugador[0].forwardLimit;
	}

	if (keys["Q"] || (jugador[0].inputXpad.LB[1])) {
		debugger;
		jugador[0].inputXpad.LB[1] = false;
		jugador[0].leftRight = -jugador[0].leftRightLimit;
	}
	else if (keys["E"] || (jugador[0].inputXpad.RB[1])) {
		jugador[0].inputXpad.RB[1] = false;
		jugador[0].leftRight = jugador[0].leftRightLimit;
	}
	//</PLAYER 1>
}

function xInputPlayer(IP) 
{

	//Sensibilidad del control (cuando deja de presionar se mueve tantito)
	if ((jugador[IP].inputXpad.A[2] < jugador[IP].inputXpad.sensibilidad) && (!jugador[IP].inputXpad.A[1])) 
	{
		jugador[IP].inputXpad.A[2] += 1;
		jugador[IP].forward = -jugador[IP].forwardLimit;
		
	}
	//Rotacion del objeto al moverlo
	if ((!jugador[IP].inputXpad.A[1])) 
	{
		if(typeof jugador[IP].camPlayer.children[0] != undefined)
		jugador[IP].camPlayer.children[0].rotation.y = (jugador[IP].camPlayer.children[0].auxRot.y);

		if(debug)
		{
			console.log(jugador[IP].camPlayer.children[0]);
			debug=false;
		}
		
	}
	

	//Mover para adelante
	if ((jugador[IP].inputXpad.A[1])) {
		//debugger;
		
		jugador[IP].inputXpad.A[1] = false;
		if (jugador[IP].inputXpad.A[2] >= (jugador[IP].inputXpad.sensibilidad * -1))
			jugador[IP].inputXpad.A[2] -= 1;
		jugador[IP].forward = -jugador[IP].forwardLimit;

	}
	//Mover para atras
	else if ((jugador[IP].inputXpad.X[1])) {

		jugador[IP].inputXpad.X[1] = false;
		jugador[IP].forward = jugador[IP].forwardLimit;
	}

	//Mover para la izquierda (paneo)
	if ((jugador[IP].inputXpad.LB[1])) {
		
		jugador[IP].inputXpad.LB[1] = false;
		jugador[IP].leftRight = -jugador[IP].leftRightLimit;
	}
	//Mover para la derecha (paneo)
	else if ((jugador[IP].inputXpad.RB[1])) {
		jugador[IP].inputXpad.RB[1] = false;
		jugador[IP].leftRight = jugador[IP].leftRightLimit;
	}

	//Mover para arriba
	if ((jugador[IP].inputXpad.B[1])) {
		
		jugador[IP].inputXpad.B[1] = false;
		jugador[IP].topBottom = jugador[IP].topBottomLimit;
	}
	//Mover para abajo
	else if ((jugador[IP].inputXpad.Y[1])) {
		jugador[IP].inputXpad.Y[1] = false;
		jugador[IP].topBottom = -jugador[IP].topBottomLimit;
	}

	//Mover para la izquierda (rotacion)
	if ((jugador[IP].inputXpad.LStickLeft[1])) {
		jugador[IP].inputXpad.LStickLeft[1] = false;
		//este if está para bloquear la rotación en caso de no mover el choche
		if (
			((jugador[IP].inputXpad.A[1])) ||
			((jugador[IP].inputXpad.X[1])) ||
			(jugador[IP].inputXpad.A[2] != jugador[IP].inputXpad.sensibilidad)
		) {
			jugador[IP].yaw = jugador[IP].yawLimit;
			if
			(
				jugador[IP].camPlayer.children[0].rotation.y <
				jugador[IP].camPlayer.children[0].maxRot[0].y
			)
			if(typeof jugador[IP].camPlayer.children[0] != undefined)
				jugador[IP].camPlayer.children[0].rotation.y += THREE.Math.degToRad(jugador[IP].sensRot);

				
		}
	}
	// Mover para la derecha (rotacion)
	else if ((jugador[IP].inputXpad.LStickRight[1])) {
		jugador[IP].inputXpad.LStickRight[1] = false;
		//este if está para bloquear la rotación en caso de no mover el choche
		if (
			((jugador[IP].inputXpad.A[1])) ||
			((jugador[IP].inputXpad.X[1])) ||
			(jugador[IP].inputXpad.A[2] != jugador[IP].inputXpad.sensibilidad)
		) {
			jugador[IP].yaw = -jugador[IP].yawLimit;
			if
			(
				jugador[IP].camPlayer.children[0].rotation.y >
				jugador[IP].camPlayer.children[0].maxRot[1].y
			)
			if(typeof jugador[IP].camPlayer.children[0] != undefined)
				jugador[IP].camPlayer.children[0].rotation.y -= THREE.Math.degToRad(jugador[IP].sensRot);
		}
	}
	
}

function keysPlayers() {

	for (var i = 0; i < players; i++) 
	{
		if(!jugador[i].colision)
		{ 
			jugador[i].yaw = 0;
			jugador[i].leftRight = 0;
			jugador[i].forward = 0;
			jugador[i].topBottom = 0;
			
			xInputPlayer(i);
		}
	}
	
	//player1
/*	xInputPlayer(0);
	xInputPlayer(1);
	xInputPlayer(2);
	xInputPlayer(3);*/
/*
	//<PLAYER 2>
	if (keys["F"]) {
		jugador[1].yaw = 1;
	}
	else if (keys["H"]) {
		jugador[1].yaw = -1;
	}
	if (keys["T"]) {
		console.debug("T");
		jugador[1].forward = -20;
	}
	else if (keys["G"]) {
		jugador[1].forward = 20;
	}
	if (keys["R"]) {
		jugador[1].leftRight = -0.1;
	}
	else if (keys["Y"]) {
		jugador[1].leftRight = 0.1;
	}
	//</PLAYER 2>

	//<PLAYER 3>
	if (keys["J"]) {
		jugador[2].yaw = 1;
	}
	else if (keys["L"]) {
		jugador[2].yaw = -1;
	}
	if (keys["I"]) {
		jugador[2].forward = -20;
	}
	else if (keys["K"]) {
		jugador[2].forward = 20;
	}
	if (keys["U"]) {
		jugador[2].leftRight = -0.1;
	}
	else if (keys["O"]) {
		jugador[2].leftRight = 0.1;
	}
	//</PLAYER 3>

	//<PLAYER 4>
	if (keys["1"]) {
		jugador[3].yaw = 1;
	}
	else if (keys["2"]) {
		jugador[3].yaw = -1;
	}
	if (keys["3"]) {
		jugador[3].forward = -20;
	}
	else if (keys["4"]) {
		jugador[3].forward = 20;
	}
	if (keys["5"]) {
		jugador[3].leftRight = -0.1;
	}
	else if (keys["6"]) {
		jugador[3].leftRight = 0.1;
	}
	//</PLAYER 4>

	*/
}