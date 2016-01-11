function Avatar(stage, y) {
    var textureArray = [];

    for (var i=0; i < 5; i++)
    {
        var texture = PIXI.Texture.fromImage("img/avatar-" + i + ".png");
        textureArray.push(texture);
    };

    var mc = new PIXI.MovieClip(textureArray);
    
    mc.position.x = 10 + 225 / 2;
    mc.position.y = y;
    mc.anchor.set(0.5);
    
    mc.interactive = true;
    mc.loop = true;
    mc.play();
    
    function onDragStart(event)
    {
        // store a reference to the data
        // the reason for this is because of multitouch
        // we want to track the movement of this particular touch
        this.data = event.data;
        this.dragging = true;
    }

    function onDragEnd()
    {
        this.dragging = false;
        this.data = null;
    }

    function onDragMove()
    {
        if (this.dragging)
        {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    }

    mc
        // events for drag start
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        // events for drag end
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        // events for drag move
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);

    stage.addChild(mc);
    
    this.update = function() {
    }
}
