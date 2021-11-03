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