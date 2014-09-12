module GameTs
{
    export class Boot extends Phaser.State
    {
      
        orientated: boolean = false;
        preload()
        {
            window.console.info("State preload() - <Boot>");

            this.load.image('preloadBar', 'assets/preloader.gif');
        }

        create()
        {
            console.info("State create() - <Boot>");

            this.stage.disableVisibilityChange = true;
            this.game.input.maxPointers = 1;
            if (this.game.device.desktop) {
              this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
              this.game.scale.minWidth = 320;
              this.game.scale.minHeight = 260;
              this.game.scale.maxWidth = 1024;
              this.game.scale.maxHeight = 768;
              this.game.scale.pageAlignHorizontally = true;
              this.game.scale.pageAlignVertically = true;
              this.game.scale.forceOrientation(false, true); // set to portrait, change the values around for landspace
              this.game.scale.setResizeCallback(this.gameResized, this.game);
              this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this.game);
              this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this.game);

              this.game.scale.setScreenSize(true);
            }
            else {
              // Mobile devices
              this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
              this.game.scale.minWidth = 320;
              this.game.scale.minHeight = 260;
              this.game.scale.maxWidth = 1024;
              this.game.scale.maxHeight = 768;
              this.game.scale.pageAlignHorizontally = true;
              this.game.scale.pageAlignVertically = true;
              this.game.scale.forceOrientation(false, true); // set to portrait, change the values around for landspace
              this.game.scale.setResizeCallback(this.gameResized, this.game);
              this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this.game);
              this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this.game);
              this.game.scale.setScreenSize(true);
            }
            
            
            this.game.state.start('Preload');
        }
        
        gameResized(width, height){
          //  This could be handy if you need to do any extra processing if the game resizes.
          //  A resize could happen if for example swapping orientation on a device.
        }
        
        enterIncorrectOrientation(){
          console.log("enterIncorrectOrientation called - <Boot>");
          this.orientated = false;
          document.getElementById('orientation').style.display = 'block';

        }
        
        leaveIncorrectOrientation(){
          console.log("leaveIncorrectOrientation called - <Boot>");
          this.orientated = true;
          document.getElementById('orientation').style.display = 'none';

        }
        
    }
} 




