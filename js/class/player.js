var Jugador = class Jugador
{
    
    constructor(ID, x, y, z)
    {
        this.ID = ID;
        this.x = x;
        this.y = y;
        this.z = z;
        
        setupSceneForViewport(this.ID, "scene-section-0" + this.ID + 1, this.x, this.y, this.z);

       
        
    }
    mover(cam)
    {
        this.yaw = 0;
        this.forward = 0;
        this.leftRight = 0;

        this.cam.rotation.y += yaw * deltaTime;
        this.cam.translateZ(forward * deltaTime);
        this.cam.translateX(leftRight);
    }
        keysForPlayer(idPlayer,cam)
        {
            this.camPlayerX = cam;
            switch(idPlayer)
            {
                case 4:
                if (keys["A"])          { this.yaw = 1; } 			
                else if (keys["D"]) 	{ this.yaw = -1; }
                if (keys["W"])          { this.forward = -20; } 		
                else if (keys["S"])  	{ this.forward = 20; } 
                if (keys["Q"])          { this.leftRight = -0.1; } 	
                else if (keys["E"]) 	{ this.leftRight = 0.1; }
                this.mover(this.cam);
                break;
                case 2: break;
                case 3: break;
                case 4: break;
                default:break;
            }
           
        }
   
}