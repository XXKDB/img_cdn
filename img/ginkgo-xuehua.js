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