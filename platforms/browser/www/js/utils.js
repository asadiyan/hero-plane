function ImageLoader(onload) {
    var that = this;

    this.loadArray = function(files) {
        var images = [];
        var count = 0;
        for(var i = 0; i < files.length; i++) {
            images.push(new Image());
            images[i].onload = function(e) {
                count += 1;
                if(count === files.length) {
                    onload(images);
                }
            };
            images[i].src = files[i];
        }
    }

    this.loadByName = function(prefix, count) {
        var files = [];
        for(var i = 0; i < count; i++) {
            files.push(prefix + "-" + i + ".png");
        }
        that.loadArray(files, onload);
    }
}

function Parallex(context, name, speed, y, onload) {
    var left, right;
    var x = 0;

    new ImageLoader(function(images) {
        left = images[0];
        right = images[1];
        onload();
    }).loadByName(name, 2);

    this.update = function() {
        context.drawImage(left, x, y);
        context.drawImage(right, x + left.width, y);
        x -= speed;
        if(x + left.width < 0) {
            var t = left;
            left = right;
            right = left;
            x += left.width;
        }
    }
}
