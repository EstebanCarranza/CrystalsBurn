var input = [];
function getInput(index)
{
    return input[index];
}
function enableGamepads()
{
    var haveEvents = 'ongamepadconnected' in window;
    var controllers = {};

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
            var controller = controllers[j];

            for (i = 0; i < controller.buttons.length; i++) {
                var val = controller.buttons[i];
                var pressed = []; 
                pressed[i] = val == 1.0;
                if (typeof(val) == "object") {
                    
                    pressed[i] = val.pressed;
                    val = val.value;
                }

                if (pressed[0]) { console.log("PAD" + j + "_A"); input[j] = "PAD" + j + "_A";}
                if (pressed[1]) { console.log("PAD" + j + "_B"); input[j] = "PAD" + j + "_B";}
                if (pressed[2]) { console.log("PAD" + j + "_X"); input[j] = "PAD" + j + "_X";}
                if (pressed[3]) { console.log("PAD" + j + "_Y"); input[j] = "PAD" + j + "_Y";}
                if (pressed[4]) { console.log("PAD" + j + "_LB"); input[j] = "PAD" + j + "_LB";}
                if (pressed[5]) { console.log("PAD" + j + "_RB"); input[j] = "PAD" + j + "_RB";}
                if (pressed[6]) { console.log("PAD" + j + "_RT"); input[j] = "PAD" + j + "_RT";}
                if (pressed[7]) { console.log("PAD" + j + "_LT"); input[j] = "PAD" + j + "_LT";}
                if (pressed[8]) { console.log("PAD" + j + "_SELECT"); input[j] = "PAD" + j + "_SELECT";}
                if (pressed[9]) { console.log("PAD" + j + "_START"); input[j] = "PAD" + j + "_START";}
                if (pressed[10]) { console.log("PAD" + j + "_L3"); input[j] = "PAD" + j + "_L3";}
                if (pressed[11]) { console.log("PAD" + j + "_R3"); input[j] = "PAD" + j + "_R3";}
                if (pressed[12]) { console.log("PAD" + j + "_POV-UP"); input[j] = "PAD" + j + "_POV-UP";}
                if (pressed[13]) { console.log("PAD" + j + "_POV-DOWN"); input[j] = "PAD" + j + "_POV-DOWN";}
                if (pressed[14]) { console.log("PAD" + j + "_POV-LEFT"); input[j] = "PAD" + j + "_POV-LEFT";}
                if (pressed[15]) { console.log("PAD" + j + "_POV-RIGHT"); input[j] = "PAD" + j + "_POV-RIGHT";}
                if(controller.axes[0] < -0.8)
                {
                    console.log("PAD" + j + "_[LST-LEFT] " + controller.axes[0].toFixed(4));
                    input[j] = "PAD" + j + "_[LST-LEFT] " + controller.axes[0].toFixed(4);
                }

                if(controller.axes[0] > 0.8)
                {
                    console.log("PAD" + j + "_[LST-RIGHT] " + controller.axes[1].toFixed(4));
                    input[j] ="PAD" + j + "_[LST-RIGHT] " + controller.axes[1].toFixed(4);
                }
                if(controller.axes[1] < -0.8)
                {
                    console.log("PAD" + j + "_[LST-UP] " + controller.axes[0].toFixed(4));
                    input[j] = "PAD" + j + "_[LST-UP] " + controller.axes[0].toFixed(4);
                }
                if(controller.axes[1] > 0.8)
                {  
                    console.log("PAD" + j + "_[LST-DOWN] " + controller.axes[1].toFixed(4));
                    input[j] = "PAD" + j + "_[LST-DOWN] " + controller.axes[1].toFixed(4);
                }
                
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

    console.log("input["+ 0 + "] " + input[0]);
}