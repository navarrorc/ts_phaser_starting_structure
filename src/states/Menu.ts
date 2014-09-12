module GameTs {
  export class Menu extends Phaser.State {
    preload() {
        window.console.info("State preload() - <Menu> (NOP)");

        // nothing to preload at this point and in fact this entire function can be removed

    }

    create() {
        window.console.info("State create() - <Menu>");
        var logoImage = this.game.add.image(0,0, 'phaser-logo'); // display logo
    }
    
  }
}