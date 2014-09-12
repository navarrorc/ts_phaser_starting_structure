module GameTs
{
    export class Preload extends Phaser.State
    {
        // This is where Typescript shines - you can use type modifiers to hide complexity
        // but note that (currently) this isn't enforced in javascript (it is in typescript!)
        // you will still be able to access these properties outside the Preload object. 
        private preloadAsset: Phaser.Sprite = null;

        private readySyncFlag: boolean = false;

        preload() {
            window.console.info("State preload() - <Preload>");
            
            // C# style lambdas! 
            this.load.onLoadComplete.addOnce(() => { 
                this.readySyncFlag = true; window.console.info("State preload() - OnLoadComplete fired"); 
            }, this);

            this.preloadAsset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloadBar');

            this.preloadAsset.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadAsset);

            window.console.info("State preload() - Loading images and spritesheets");

            // most objects receive a key in the ctor to be reffered by 
            this.load.image('phaser-logo', 'assets/phaser-logo-small.png');
         
        }

        create() {
            window.console.info("State create() - <Preload>");
        }

        update() {
            if (this.readySyncFlag == true) {
                window.console.info("State preload() - Loaded... time to move to Menu");
                this.game.state.start("Menu"); 
            }

        }

    }
} 