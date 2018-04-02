class Keyboard
{
    constructor(index)
    {
        this.LStickLeft =               [("KB_" + index + "_LStickLeft"),""];
        this.LStickRight =              [("KB_" + index + "_LStickRight"),""];
        this.LStickUp =                 [("KB_" + index + "_LStickUp"),""];
        this.LStickDown =               [("KB_" + index + "_LStickDown"),""];
        this.LStickClick =              [("KB_" + index + "_LStickClick"),""];
        this.RStickClick =              [("KB_" + index + "_RStickClick"),""];
        this.PovLeft =                  [("KB_" + index + "_PovLeft"),""];
        this.PovRight =                 [("KB_" + index + "_PovRight"),""];
        this.PovUp =                    [("KB_" + index + "_PovUp"),""];
        this.PovDown =                  [("KB_" + index + "_PovDown"),""];
        this.A =                        [("KB_" + index + "_A"),""];
        this.B =                        [("KB_" + index + "_B"),""];
        this.X =                        [("KB_" + index + "_X"),""];
        this.Y =                        [("KB_" + index + "_Y"),""];
        this.LT =                       [("KB_" + index + "_LT"),""];
        this.LB =                       [("KB_" + index + "_LB"),""];
        this.RT =                       [("KB_" + index + "_RT"),""];
        this.RB =                       [("KB_" + index + "_RB"),""];
        this.START =                    [("KB_" + index + "_START"),""];
        this.SELECT =                   [("KB_" + index + "_SELECT"),""];
        switch(index)
        {
            case 0: 
                this.LStickLeft [1] = "A";
                this.LStickRight[1] = "D";
                this.LStickUp   [1] = "";
                this.LStickDown [1] = "";
                this.LStickClick[1] = "";
                this.RStickClick[1] = "";
                this.PovLeft    [1] = "";
                this.PovRight   [1] = "";
                this.PovUp      [1] = "";
                this.PovDown    [1] = "";
                this.A          [1] = "W";
                this.B          [1] = "";
                this.X          [1] = "S";
                this.Y          [1] = "";
                this.LT         [1] = "";
                this.LB         [1] = "";
                this.RT         [1] = "";
                this.RB         [1] = "";
                this.START      [1] = "";
                this.SELECT     [1] = "";
            break;
            case 1: 
                this.LStickLeft [1] = "%";
                this.LStickRight[1] = "'";
                this.LStickUp   [1] = "";
                this.LStickDown [1] = "";
                this.LStickClick[1] = "";
                this.RStickClick[1] = "";
                this.PovLeft    [1] = "";
                this.PovRight   [1] = "";
                this.PovUp      [1] = "";
                this.PovDown    [1] = "";
                this.A          [1] = "&";
                this.B          [1] = "";
                this.X          [1] = "(";
                this.Y          [1] = "";
                this.LT         [1] = "";
                this.LB         [1] = "";
                this.RT         [1] = "";
                this.RB         [1] = "";
                this.START      [1] = "";
                this.SELECT     [1] = "";
            break;
            case 2: 
                this.LStickLeft [1] = "d";
                this.LStickRight[1] = "f";
                this.LStickUp   [1] = "";
                this.LStickDown [1] = "";
                this.LStickClick[1] = "";
                this.RStickClick[1] = "";
                this.PovLeft    [1] = "";
                this.PovRight   [1] = "";
                this.PovUp      [1] = "";
                this.PovDown    [1] = "";
                this.A          [1] = "h";
                this.B          [1] = "";
                this.X          [1] = "b";
                this.Y          [1] = "";
                this.LT         [1] = "";
                this.LB         [1] = "";
                this.RT         [1] = "";
                this.RB         [1] = "";
                this.START      [1] = "";
                this.SELECT     [1] = "";
            break;
            case 3: 
                this.LStickLeft [1] = "H";
                this.LStickRight[1] = "K";
                this.LStickUp   [1] = "";
                this.LStickDown [1] = "";
                this.LStickClick[1] = "";
                this.RStickClick[1] = "";
                this.PovLeft    [1] = "";
                this.PovRight   [1] = "";
                this.PovUp      [1] = "";
                this.PovDown    [1] = "";
                this.A          [1] = "U";
                this.B          [1] = "";
                this.X          [1] = "J";
                this.Y          [1] = "";
                this.LT         [1] = "";
                this.LB         [1] = "";
                this.RT         [1] = "";
                this.RB         [1] = "";
                this.START      [1] = "";
                this.SELECT     [1] = "";
            break;
            default:break;
        }
        
    }
}
class Gamepad
{
    constructor(index) 
    {
        this.sensibilidad = 10;
        this.LStickLeft =               [("PAD_" +  index + "_LStickLeft"), false, this.sensibilidad];
        this.LStickRight =              [("PAD_" +  index + "_LStickRight"), false,this.sensibilidad];
        this.LStickUp =                 [("PAD_" +  index + "_LStickUp"), false,this.sensibilidad];
        this.LStickDown =               [("PAD_" +  index + "_LStickDown"), false,this.sensibilidad];
        this.LStickClick =              [("PAD_" +  index + "_LStickClick"), false,this.sensibilidad];
        this.RStickClick =              [("PAD_" +  index + "_RStickClick"), false,this.sensibilidad];
        this.PovLeft =                  [("PAD_" +  index + "_PovLeft"), false,this.sensibilidad];
        this.PovRight =                 [("PAD_" +  index + "_PovRight"), false,this.sensibilidad];
        this.PovUp =                    [("PAD_" +  index + "_PovUp"), false,this.sensibilidad];
        this.PovDown =                  [("PAD_" +  index + "_PovDown"), false,this.sensibilidad];
        this.A =                        [("PAD_" +  index + "_A"), false,this.sensibilidad];
        this.B =                        [("PAD_" +  index + "_B"), false,this.sensibilidad];
        this.X =                        [("PAD_" +  index + "_X"), false,this.sensibilidad];
        this.Y =                        [("PAD_" +  index + "_Y"), false,this.sensibilidad];
        this.LT =                       [("PAD_" +  index + "_LT"), false,this.sensibilidad];
        this.LB =                       [("PAD_" +  index + "_LB"), false,this.sensibilidad];
        this.RT =                       [("PAD_" +  index + "_RT"), false,this.sensibilidad];
        this.RB =                       [("PAD_" +  index + "_RB"), false,this.sensibilidad];
        this.START =                    [("PAD_" +  index + "_START"), false,this.sensibilidad];
        this.SELECT =                   [("PAD_" +  index + "_SELECT"), false,this.sensibilidad];
    }
}


function enableGamepads()
{
    var haveEvents = 'ongamepadconnected' in window;
    var controllers = {};
    //var gameInput = [];

    function connecthandler(e) {
    addgamepad(e.gamepad);
    }

    function addgamepad(gamepad) 
    {
        controllers[gamepad.index] = gamepad; 
        
        requestAnimationFrame(updateStatus);
    }

    function disconnecthandler(e) 
    {
        removegamepad(e.gamepad);
    }

    function removegamepad(gamepad) 
    {
        delete controllers[gamepad.index];
    }

    function updateStatus() 
    {
        if (!haveEvents) {
            scangamepads();
        }

        var i = 0;
        var j;

        for (j in controllers) {
            //console.log(j);
            var controller = controllers[j];
            //gameInput[j] = new mugrero(j);

            for (i = 0; i < controller.buttons.length; i++) {
                var val = controller.buttons[i];
                var pressed = []; 
                pressed[i] = val == 1.0;
                if (typeof(val) == "object") {
                    
                    pressed[i] = val.pressed;
                    val = val.value;
                }

                if (pressed[0])  { jugador[j].inputXpad.A[1] = true;}
                if (pressed[1])  { jugador[j].inputXpad.B[1] = true;}
                if (pressed[2])  { jugador[j].inputXpad.X[1] = true;}
                if (pressed[3])  { jugador[j].inputXpad.Y[1] = true;}
                if (pressed[4])  { jugador[j].inputXpad.LB[1] = true;}
                if (pressed[5])  { jugador[j].inputXpad.RB[1] = true;}
                if (pressed[6])  { jugador[j].inputXpad.RT[1] = true;}
                if (pressed[7])  { jugador[j].inputXpad.LT[1] = true;}
                if (pressed[8])  { jugador[j].inputXpad.SELECT[1] = true;}
                if (pressed[9])  { jugador[j].inputXpad.START[1] = true;}
                if (pressed[10]) { jugador[j].inputXpad.LStickClick[1] = true;}
                if (pressed[11]) { jugador[j].inputXpad.RStickClick[1] = true;}
                if (pressed[12]) { jugador[j].inputXpad.PovUp[1] = true;}
                if (pressed[13]) { jugador[j].inputXpad.PovDown[1] = true;}
                if (pressed[14]) { jugador[j].inputXpad.PovLeft[1] = true;}
                if (pressed[15]) { jugador[j].inputXpad.PovRight[1] = true;}
                if(controller.axes[0] < -0.8)
                {
                    jugador[j].inputXpad.LStickLeft[1] = true;
                }

                if(controller.axes[0] > 0.8)
                {
                    jugador[j].inputXpad.LStickRight[1] = true;
                }
                if(controller.axes[1] < -0.8)
                {
                    jugador[j].inputXpad.LStickUp[1] = true;
                }
                if(controller.axes[1] > 0.8)
                {  
                    jugador[j].inputXpad.LStickDown[1] = true;
                }
                
                
/*
                if (pressed[0]) { console.log(gameInput[j].A); input.A[1] = true;}
                if (pressed[1]) { console.log(gameInput[j].B); input.B[1] = true;}
                if (pressed[2]) { console.log(gameInput[j].X); input.X[1] = true;}
                if (pressed[3]) { console.log(gameInput[j].Y); input.Y[1] = true;}
                
                if (pressed[4]) { console.log(gameInput[j].LB); input.LB[1] = true;}
                if (pressed[5]) { console.log(gameInput[j].RB); input.RB[1] = true;}
                if (pressed[6]) { console.log(gameInput[j].RT); input.RT[1] = gameInput[j].RT;}
                if (pressed[7]) { console.log(gameInput[j].LT); input[7] = gameInput[j].LT;}
                if (pressed[8]) { console.log(gameInput[j].SELECT); input[8] = gameInput[j].SELECT;}
                if (pressed[9]) { console.log(gameInput[j].START); input[9] = gameInput[j].START;}
                if (pressed[10]) { console.log(gameInput[j].LStickClick); input[10] = gameInput[j].LStickClick;}
                if (pressed[11]) { console.log(gameInput[j].RStickClick); input[11] = gameInput[j].RStickClick;}
                if (pressed[12]) { console.log(gameInput[j].PovUp); input[12] = gameInput[j].PovUp;}
                if (pressed[13]) { console.log(gameInput[j].PovDown); input[13] = gameInput[j].PovDown;}
                if (pressed[14]) { console.log(gameInput[j].PovLeft); input[14] = gameInput[j].PovLeft;}
                if (pressed[15]) { console.log(gameInput[j].PovRight); input[15] = gameInput[j].PovRight;}
                if(controller.axes[0] < -0.8)
                {
                    console.log(gameInput[j].LStickLeft); // + controller.axes[0].toFixed(4));
                    input[16].LStickLeft = gameInput[j].LStickLeft; // + controller.axes[0].toFixed(4);
                }

                if(controller.axes[0] > 0.8)
                {
                    console.log(gameInput[j].LStickRight); // + controller.axes[1].toFixed(4));
                    input[17].LStickRight = gameInput[j].LStickRight; // + controller.axes[1].toFixed(4);
                }
                if(controller.axes[1] < -0.8)
                {
                    console.log(gameInput[j].LStickUp); // + controller.axes[0].toFixed(4));
                    input[18].LStickUp = gameInput[j].LStickUp; // + controller.axes[0].toFixed(4);
                }
                if(controller.axes[1] > 0.8)
                {  
                    console.log(gameInput[j].LStickDown);// + controller.axes[1].toFixed(4));
                    input[19].LStickDown = gameInput[j].LStickDown; // + controller.axes[1].toFixed(4);
                }
                */
                
            }
                
        }
        
        requestAnimationFrame(updateStatus);
    }

    function scangamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
        if (gamepads[i].index in controllers) {
            controllers[gamepads[i].index] = gamepads[i];
        } else {
            addgamepad(gamepads[i]);
        }
        }
    }
    }


    window.addEventListener("gamepadconnected", connecthandler);
    window.addEventListener("gamepaddisconnected", disconnecthandler);

    if (!haveEvents) {
    setInterval(scangamepads, 500);
    }

    //console.log("input["+ 0 + "] " + input[0]);
}