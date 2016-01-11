

function Scene(context, onload) {
    var mountainLayer = new Parallex(context, "img/mountains", 0.5, context.canvas.height - 276, onload);

    this.update = function() {
        mountainLayer.update();
    }
}
