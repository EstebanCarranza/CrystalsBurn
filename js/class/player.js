class Jugador {
	constructor(id, movement, velocity, spectatorPos, spectatorScl, spectatorRot) {
		this.id = id;
		this.forward = 0;
		this.yaw = 0;
		this.sensRot = movement[4];
		this.leftRight = 0;
		this.topBottom = 0;
		this.camPlayer;
		this.forwardLimit = movement[0];
		this.forwardLimitAux = movement[0];
		this.yawLimit = movement[1];
		this.leftRightLimit = movement[2];
		this.topBottomLimit = movement[3];
		this.viewport;
		this.modelo = null;
		this.colision = false;
		this.spectatorPos = new THREE.Vector3(spectatorPos.x, spectatorPos.y, spectatorPos.z);
		this.spectatorRot = new THREE.Vector3(spectatorRot.x, spectatorRot.y, spectatorRot.z);
		this.spectatorScl = new THREE.Vector3(spectatorScl.x, spectatorScl.y, spectatorScl.z);
		this.velMin = velocity[0];
		this.velInc = velocity[1];
		this.velMax = velocity[2];
		this.velFreno = velocity[3];
		this.rayos =
			[
				new THREE.Vector3(1, 0, 0),
				new THREE.Vector3(-1, 0, 0),
				new THREE.Vector3(0, 0, 1),
				new THREE.Vector3(0, 0, -1)
			];
		this.raycaster = new THREE.Raycaster();

		/*this.inputXpad = [];
		this.inputXpad[0] = new Gamepad(id);
		this.inputXpad[1] = new Keyboard(id);*/
		this.inputXpad = new Gamepad(id);
		this.inputKpad = new Keyboard(id);
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
	if(jugador[IP].inputXpad.START[1] || keys[jugador[IP].inputKpad.START[1]])
	{
		$("#menu-pausa").show();
		console.log("pausa");
	}

	//Sensibilidad del control (cuando deja de presionar se mueve tantito)
	/*
	if ((jugador[IP].inputXpad.A[2] < jugador[IP].inputXpad.sensibilidad) && (!jugador[IP].inputXpad.A[1])) 
	{
		jugador[IP].inputXpad.A[2] += 1;
		jugador[IP].forward = -jugador[IP].forwardLimit;
		
	}
	*/

		//Acomoda el modelo cuando se deja de mover
		if ((!jugador[IP].inputXpad.A[1]) || !keys[jugador[IP].inputKpad.A[1]]) 
		{
			
			if(typeof jugador[IP].camPlayer.children[0] != undefined)
			jugador[IP].camPlayer.children[0].rotation.y = (jugador[IP].camPlayer.children[0].auxRot.y);
	
		}

	//Mover para adelante
	if ((jugador[IP].inputXpad.A[1]) || (keys[jugador[IP].inputKpad.A[1]])) {
		
		/*
		//debugger;
	
		//sensibilidad para que se siga moviendo al dejar de presionar
		
		if (jugador[IP].inputXpad.A[2] >= (jugador[IP].inputXpad.sensibilidad * -1))
			jugador[IP].inputXpad.A[2] -= 1;
		

		//mover camara hacia delante
		//
*/
		//Deshabilitar input del control para evitar que se quede presionado
		jugador[IP].inputXpad.A[1] = false;
		//Mover hacia adelante
		jugador[IP].forward = -jugador[IP].forwardLimit;
		
		//Incrementar velocidad al presionar sin exceder el limite
		if(jugador[IP].forwardLimit < jugador[IP].velMax)
			jugador[IP].forwardLimit+=jugador[IP].velInc;

			/*
		jugador[IP].camPlayer.children[0].children[26].rotation.y += THREE.Math.degToRad(jugador[IP].sensRot);
		jugador[IP].camPlayer.children[0].children[27].rotation.y += THREE.Math.degToRad(jugador[IP].sensRot);
		jugador[IP].camPlayer.children[0].children[28].rotation.y += THREE.Math.degToRad(jugador[IP].sensRot);
		jugador[IP].camPlayer.children[0].children[29].rotation.y += THREE.Math.degToRad(jugador[IP].sensRot);
		*/

	}
	//Mover para atras
	else if ((jugador[IP].inputXpad.X[1]) || (keys[jugador[IP].inputKpad.X[1]])) {

		

		/*
		if (jugador[IP].inputXpad.X[2] >= (jugador[IP].inputXpad.sensibilidad * -1))
			jugador[IP].inputXpad.X[2] -= 1;
			*/
		
			//Deshabilitar input del control para evitar que se quede presionado
		jugador[IP].inputXpad.X[1] = false;
		/*
		jugador[IP].forwardLimit-=jugador[IP].velInc;
		//mover camara hacia atrás
		jugador[IP].forward = jugador[IP].forwardLimit;
		*/
		//jugador[IP].forwardLimit-=jugador[IP].velInc;
		if(jugador[IP].forwardLimit >= jugador[IP].velMin)
			jugador[IP].forwardLimit-=(jugador[IP].velInc*jugador[IP].velFreno);

		if(jugador[IP].forwardLimit <= jugador[IP].velMin)
		{
			jugador[IP].forward = -jugador[IP].forwardLimit;
		}

		/*if(jugador[IP].forward == (jugador[IP].velMin*10))
		{
			jugador[IP].forward = jugador[IP].forwardLimit;
		}*/
		//jugador[IP].forward = jugador[IP].forwardLimit;
		//Incrementar velocidad al presionar sin exceder el limite
		/*
			if(jugador[IP].forwardLimit < jugador[IP].velMax)
				jugador[IP].forwardLimit+=jugador[IP].velInc;
		*/

	}

	//Mover para la izquierda (paneo)
	if ((jugador[IP].inputXpad.LB[1]) || (keys[jugador[IP].inputKpad.LB[1]])) {
		
		jugador[IP].inputXpad.LB[1] = false;
		jugador[IP].leftRight = -jugador[IP].leftRightLimit;
	}
	//Mover para la derecha (paneo)
	else if ((jugador[IP].inputXpad.RB[1]) || (keys[jugador[IP].inputKpad.RB[1]])) {
		jugador[IP].inputXpad.RB[1] = false;
		jugador[IP].leftRight = jugador[IP].leftRightLimit;
	}

	//Mover para arriba
	if ((jugador[IP].inputXpad.B[1]) || keys[jugador[IP].inputKpad.B[1]]) {
		
		jugador[IP].inputXpad.B[1] = false;
		jugador[IP].topBottom = jugador[IP].topBottomLimit;
	}
	//Mover para abajo
	else if ((jugador[IP].inputXpad.Y[1]) || keys[jugador[IP].inputKpad.Y[1]]) {
		jugador[IP].inputXpad.Y[1] = false;
		jugador[IP].topBottom = -jugador[IP].topBottomLimit;
	}

	//Mover para la izquierda (rotacion)
	if ((jugador[IP].inputXpad.LStickLeft[1])|| (keys[jugador[IP].inputKpad.LStickLeft[1]])) 
	{
		jugador[IP].inputXpad.LStickLeft[1] = false;
		//este if está para bloquear la rotación en caso de no mover el choche
		/*
		if (
			((jugador[IP].inputXpad.A[1])) ||
			((jugador[IP].inputXpad.X[1])) ||
			(jugador[IP].inputXpad.A[2] != jugador[IP].inputXpad.sensibilidad) ||
			(jugador[IP].inputXpad.X[2] != jugador[IP].inputXpad.sensibilidad)
		) */
		if(jugador[IP].forwardLimit != jugador[IP].velMin)
		{
			jugador[IP].yaw = jugador[IP].yawLimit;
		/*	if
			(
				jugador[IP].camPlayer.children[0].rotation.y <
				jugador[IP].camPlayer.children[0].maxRot[0].y
			)
		*/	
			if(jugador[IP].forward > jugador[IP].velMin)
			{
				if(typeof jugador[IP].camPlayer.children[0] != undefined)
					jugador[IP].camPlayer.children[0].rotation.y -= THREE.Math.degToRad(jugador[IP].sensRot);
			}
			else
			{
				if(typeof jugador[IP].camPlayer.children[0] != undefined)
				jugador[IP].camPlayer.children[0].rotation.y += THREE.Math.degToRad(jugador[IP].sensRot);
			}	

			
		}
	}
	// Mover para la derecha (rotacion)
	else if ((jugador[IP].inputXpad.LStickRight[1]) || (keys[jugador[IP].inputKpad.LStickRight[1]])) {
		jugador[IP].inputXpad.LStickRight[1] = false;
		//este if está para bloquear la rotación en caso de no mover el choche
		/*if (
			((jugador[IP].inputXpad.A[1])) ||
			((jugador[IP].inputXpad.X[1])) ||
			(jugador[IP].inputXpad.A[2] != jugador[IP].inputXpad.sensibilidad) ||
			(jugador[IP].inputXpad.X[2] != jugador[IP].inputXpad.sensibilidad)
		) */
		if(jugador[IP].forwardLimit != jugador[IP].velMin)
		{
			jugador[IP].yaw = -jugador[IP].yawLimit;
		/*	if
			(
				jugador[IP].camPlayer.children[0].rotation.y >
				jugador[IP].camPlayer.children[0].maxRot[1].y
			)*/
			if(jugador[IP].forward > jugador[IP].velMin)
			{
				if(typeof jugador[IP].camPlayer.children[0] != undefined)
					jugador[IP].camPlayer.children[0].rotation.y += THREE.Math.degToRad(jugador[IP].sensRot);
			}
			else
			{
				if(typeof jugador[IP].camPlayer.children[0] != undefined)
				jugador[IP].camPlayer.children[0].rotation.y -= THREE.Math.degToRad(jugador[IP].sensRot);
			}	
		}
	}



	if(jugador[IP].forwardLimit > jugador[IP].velMin && (!keys[jugador[IP].inputKpad.A[1]] || jugador[IP].inputXpad.A[1]))
	{ 
		jugador[IP].forwardLimit-=jugador[IP].velInc;
		jugador[IP].forward = -jugador[IP].forwardLimit;
	}
	/*if(jugador[IP].forwardLimit < jugador[IP].velMin && (!keys[jugador[IP].inputKpad.X[1]] || jugador[IP].inputXpad.X[1]))
	{
		//jugador[IP].velInc *= -1;
		//jugador[IP].forwardLimit+=jugador[IP].velInc;
		jugador[IP].forward = jugador[IP].forwardLimit;
	}*/
	
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
//			jugador[i].forwardLimit = jugador[i].forwardLimitAux;
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