/*
 * It is the main object of the program. It initializes the canvas and runs the game.
 */
function Game(mountElementId) {
    var canvas = document.getElementById(mountElementId);
    var far, mid, front, sun, backTree, frontTree;

    /*
     * It enlarges the canvas to fill the window.
     */
    function resizeCanvas() {
        canvas.width  = window.innerWidth - 2;
        canvas.height = window.innerHeight - 2;
    }

    /*
     * It handles the canvas size when the window is resizing.
     */
    $(window).resize(function() {
        resizeCanvas();
    });

    /*
     * The function will directly be called to initialize the canvas
     */
    resizeCanvas();


    function update() {
        sun.rotation += 0.1;
        
        far.tilePosition.x -= 0.512;
        cloud.tilePosition.x -= 0.768;
        backTree.tilePosition.x -= 2.048;
        frontTree.tilePosition.x -= 4.096;
        front.tilePosition.x -= 8.192;
        
        avatar.update();
        
        renderer.render(stage);
        requestAnimationFrame(update);
    }        

    this.start = function() {
        stage = new PIXI.Container();
        renderer = new PIXI.autoDetectRenderer(
            canvas.width,
            canvas.height,
            {view: document.getElementById(mountElementId)}
        );
        
        var sunTexture = PIXI.Texture.fromImage('img/sun.png');

        // create a new Sprite using the texture
        sun = new PIXI.Sprite(sunTexture);

        // center the sprite's anchor point
        sun.anchor.x = 0.5;
        sun.anchor.y = 0.5;

        // move the sprite to the center of the screen
        sun.position.x = canvas.width - 281 / 2 - 10;
        sun.position.y = 10 + 263 / 2;

        stage.addChild(sun);

        
        var farTexture = PIXI.Texture.fromImage("img/mountains.png");	
        far = new PIXI.extras.TilingSprite(farTexture, canvas.width, 674);
        far.position.x = 0;
        far.position.y = canvas.height - 674;
        far.tilePosition.x = 0;
        far.tilePosition.y = 0;
        stage.addChild(far);
        
        var cloudTexture = PIXI.Texture.fromImage("img/cloud.png");	
        cloud = new PIXI.extras.TilingSprite(cloudTexture, canvas.width, 274);
        cloud.position.x = 0;
        cloud.position.y = 100;
        cloud.tilePosition.x = 0;
        cloud.tilePosition.y = 0;
        stage.addChild(cloud);
        
        var btTexture = PIXI.Texture.fromImage("img/tree-back.png", 2400, 330);
        backTree = new PIXI.extras.TilingSprite(btTexture, canvas.width, 330);
        backTree.position.x = 0;
        backTree.position.y = canvas.height - 330 - 45;
        backTree.tilePosition.x = 0;
        backTree.tilePosition.y = 0;
        stage.addChild(backTree);

        var ftTexture = PIXI.Texture.fromImage("img/tree-front.png", 2580, 336);	
        frontTree = new PIXI.extras.TilingSprite(ftTexture, canvas.width, 336);
        frontTree.position.x = 0;
        frontTree.position.y = canvas.height - 336;
        frontTree.tilePosition.x = 0;
        frontTree.tilePosition.y = 0;
        stage.addChild(frontTree);

        var frontTexture = PIXI.Texture.fromImage("img/grass.png");	
        front = new PIXI.extras.TilingSprite(frontTexture, canvas.width, 99);
        front.position.x = 0;
        front.position.y = canvas.height - 99;
        front.tilePosition.x = 0;
        front.tilePosition.y = 0;
        stage.addChild(front);
        
        avatar = new Avatar(stage, canvas.height / 2);
                
        /*var midTexture = PIXI.Texture.fromImage("resources/bg-mid.png");
        mid = new PIXI.TilingSprite(midTexture, canvas.width, 256);
        mid.position.x = 0;
        mid.position.y = 128;
        mid.tilePosition.x = 0;
        mid.tilePosition.y = 0;
        stage.addChild(mid);*/
        
        requestAnimationFrame(update);
    }
    
}
