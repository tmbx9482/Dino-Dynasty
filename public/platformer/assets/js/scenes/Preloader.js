export default class Preloader extends Phaser.Scene {
    constructor() {
        //scene name
        super("preloader");
    }

    //calls in the platformer/assets
    preload(){
        //test
        this.load.image("test", "../platformer/assets/img/player/individual/dino-blue-hurt-1.png")

        //levels
        this.load.image("sand-tiles", "../platformer/assets/img/tilesets/Sand Tiles.png")
        this.load.tilemapTiledJSON("practice-level", "../platformer/assets/json/tilesets/platformer-02.json")
        this.load.tilemapTiledJSON("small-level", "../platformer/assets/json/tilesets/platformer-01.json")

        //blocks and platforms
        this.load.image("block", "../platformer/assets/img/platforms/block.png");

        //player
        this.load.atlas("dino-green", "../platformer/assets/img/player/dino-green.png", "../platformer/assets/json/player/dino-green.json")
        this.load.atlas("dino-blue", "../platformer/assets/img/player/dino-blue.png", "../platformer/assets/json/player/dino-blue.json")
        this.load.atlas("dino-red", "../platformer/assets/img/player/dino-red.png", "../platformer/assets/json/player/dino-red.json")
        this.load.atlas("dino-yellow", "../platformer/assets/img/player/dino-yellow.png", "../platformer/assets/json/player/dino-yellow.json")

        //attacks
        this.load.atlas("fire-ball", "../platformer/assets/img/player/attacks/fire-ball.png", "../platformer/assets/json/player/attacks/fire-ball.json")

        //effects
        this.load.image("black-circle", "../platformer/assets/img/effects/black-circle.png")
        this.load.image("particles", "../platformer/assets/img/effects/whiteish-circle.png")

        //collectables
        this.load.image("coin-blue", "../platformer/assets/img/collectables/bluepotion.png")
        this.load.image("coin-red", "../platformer/assets/img/collectables/redpotion.png")
        this.load.image("coin-yellow", "../platformer/assets/img/collectables/yellowpotion.png")

        //enemies
        this.load.image("bat-1", "../platformer/assets/img/enemies/bat-1.png");
        this.load.image("bat-2", "../platformer/assets/img/enemies/bat-2.png");
        this.load.atlas("bigmouth", "../platformer/assets/img/enemies/bigmouth.png", "../platformer/assets/json/enemies/bigmouth.json");
        this.load.atlas("humpback", "../platformer/assets/img/enemies/humpback.png", "../platformer/assets/json/enemies/humpback.json");
        this.load.atlas("mustache", "../platformer/assets/img/enemies/mustache.png", "../platformer/assets/json/enemies/mustache.json");
        this.load.atlas("triclops", "../platformer/assets/img/enemies/triclops.png", "../platformer/assets/json/enemies/triclops.json");

        //hazards & enemy attacks
        this.load.image("cow-skull", "../platformer/assets/img/enemies/weapons/cow-skull.png")

        //ui
        this.load.image("dino-green-ui", "../platformer/assets/img/player/individual/dino-green-idle-1")
        this.load.image("dino-blue-ui", "../platformer/assets/img/player/individual/dino-blue-idle-1")
        this.load.image("dino-red-ui", "../platformer/assets/img/player/individual/dino-green-red-1")
        this.load.image("dino-yellow-ui", "../platformer/assets/img/player/individual/dino-green-yellow-1")
    }

    create(){
        //TODO have it load the main menu
        this.scene.start("game")
    }
}