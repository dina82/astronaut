let canv = document.querySelector('canvas')
canv.width = window.innerWidth;
canv.height = window.innerHeight
let canvas = canv.getContext('2d');
class Wire {
    constructor(x, y, raduis) {
        this.x = x;
        this.y = y;
        this.raduis = raduis;
    }
    draw(endpoint) {
        canvas.beginPath()
        canvas.arc(endpoint.x, endpoint.y, this.raduis, 0, Math.PI * 2, false);
        canvas.fillStyle = 'rgba(236, 240, 241, 1)';
        canvas.fill()
    }
    drawLine() {
        canvas.beginPath()
        canvas.moveTo(0, 150);
        canvas.lineTo(250, 200)
        canvas.bezierCurveTo(270, 220, 270, 260, 380, 220);
        canvas.lineTo(600, 220)
        canvas.strokeStyle = 'red';
        canvas.lineWidth = 5
        canvas.stroke()
        canvas.closePath()

    }
    move() {
        if (this.x >= innerWidth || this.y > innerHeight) {
            this.x = 0
        }
        this.x += .5
        this.y += .01
        let endpoint = { x: this.x, y: this.y }
        this.draw(endpoint)
    }
}
let arr = []
for (let i = 0; i < 100; i++) {
    let x = Math.random() * innerWidth
    let y = Math.random() * innerHeight
    let raduis = Math.random() * 3
    let wi = new Wire(x, y, raduis)
    arr.push(wi)
}
animation()

function animation() {
    requestAnimationFrame(animation)
    canvas.clearRect(0, 0, innerWidth, innerHeight)

    arr.forEach(element => {
        element.move()
    });
}