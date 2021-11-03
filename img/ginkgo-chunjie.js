var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,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";

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 40 * this.s / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        startSakura();
    }
}