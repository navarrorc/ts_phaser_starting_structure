var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameTs;
(function (GameTs) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            console.log("Game - Initializing the Game object");
            _super.call(this, 382, 568, Phaser.AUTO, "content", null);

            console.log("Game - Adding states");

            this.state.add("Boot", GameTs.Boot, false);
            this.state.add("Preload", GameTs.Preload, false);
            this.state.add("Menu", GameTs.Menu, false);

            this.state.start("Boot");
        }
        return Game;
    })(Phaser.Game);
    GameTs.Game = Game;
})(GameTs || (GameTs = {}));
window.onload = function () {
    var game = new GameTs.Game();
};
var GameTs;
(function (GameTs) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
            this.orientated = false;
        }
        Boot.prototype.preload = function () {
            window.console.info("State preload() - <Boot>");

            this.load.image('preloadBar', 'assets/preloader.gif');
        };

        Boot.prototype.create = function () {
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
                this.game.scale.forceOrientation(false, true);
                this.game.scale.setResizeCallback(this.gameResized, this.game);
                this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this.game);
                this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this.game);

                this.game.scale.setScreenSize(true);
            } else {
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.game.scale.minWidth = 320;
                this.game.scale.minHeight = 260;
                this.game.scale.maxWidth = 1024;
                this.game.scale.maxHeight = 768;
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.pageAlignVertically = true;
                this.game.scale.forceOrientation(false, true);
                this.game.scale.setResizeCallback(this.gameResized, this.game);
                this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this.game);
                this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this.game);
                this.game.scale.setScreenSize(true);
            }

            this.game.state.start('Preload');
        };

        Boot.prototype.gameResized = function (width, height) {
        };

        Boot.prototype.enterIncorrectOrientation = function () {
            console.log("enterIncorrectOrientation called - <Boot>");
            this.orientated = false;
            document.getElementById('orientation').style.display = 'block';
        };

        Boot.prototype.leaveIncorrectOrientation = function () {
            console.log("leaveIncorrectOrientation called - <Boot>");
            this.orientated = true;
            document.getElementById('orientation').style.display = 'none';
        };
        return Boot;
    })(Phaser.State);
    GameTs.Boot = Boot;
})(GameTs || (GameTs = {}));
var GameTs;
(function (GameTs) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        Menu.prototype.preload = function () {
            window.console.info("State preload() - <Menu> (NOP)");
        };

        Menu.prototype.create = function () {
            window.console.info("State create() - <Menu>");
            var logoImage = this.game.add.image(0, 0, 'phaser-logo');
        };
        return Menu;
    })(Phaser.State);
    GameTs.Menu = Menu;
})(GameTs || (GameTs = {}));
var GameTs;
(function (GameTs) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            _super.apply(this, arguments);
            this.preloadAsset = null;
            this.readySyncFlag = false;
        }
        Preload.prototype.preload = function () {
            var _this = this;
            window.console.info("State preload() - <Preload>");

            this.load.onLoadComplete.addOnce(function () {
                _this.readySyncFlag = true;
                window.console.info("State preload() - OnLoadComplete fired");
            }, this);

            this.preloadAsset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloadBar');

            this.preloadAsset.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadAsset);

            window.console.info("State preload() - Loading images and spritesheets");

            this.load.image('phaser-logo', 'assets/phaser-logo-small.png');
        };

        Preload.prototype.create = function () {
            window.console.info("State create() - <Preload>");
        };

        Preload.prototype.update = function () {
            if (this.readySyncFlag == true) {
                window.console.info("State preload() - Loaded... time to move to Menu");
                this.game.state.start("Menu");
            }
        };
        return Preload;
    })(Phaser.State);
    GameTs.Preload = Preload;
})(GameTs || (GameTs = {}));
