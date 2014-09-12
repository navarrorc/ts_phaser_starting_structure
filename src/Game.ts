/// <reference path="phaser.d.ts"/>

module GameTs {
  export class Game extends Phaser.Game{
    constructor(){
      console.log("Game - Initializing the Game object");
      super(382, 568, Phaser.AUTO, "content", null);
      
      console.log("Game - Adding states");
      
      this.state.add("Boot", Boot, false);
      this.state.add("Preload", Preload, false);
      this.state.add("Menu", Menu, false);
      // this.state.add("Play", Play, false); //TODO: create this state (Play.ts) before uncommenting this line
      
      this.state.start("Boot");    
    }
  }
}
