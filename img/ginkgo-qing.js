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