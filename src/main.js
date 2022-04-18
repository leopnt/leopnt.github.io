'use strict';

// card flip
const card = document.querySelector('.card');
const button = document.getElementById('flip-button');
button.addEventListener('click', flipCard);

var flipMouseFlowX = -1; // -1 or 1
function flipCard() {
    card.classList.toggle('is-flipped');
    flipMouseFlowX *= -1;
}

var mouseTarget = new Float32Array([0.0, 0.0]);
var mouse = new Float32Array([0.0, 0.0]);
document.addEventListener('mousemove', (event) => {
    mouseTarget[0] = map(event.clientX, 0, canvas.clientWidth, -1, 1);
    mouseTarget[1] = map(event.clientY, 0, canvas.clientHeight, -1, 1);
});

const vertCode = document.getElementById('vert-shader').text;
const fragCode = document.getElementById('frag-shader').text;

const canvas = getCanvas('webgl-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gl = getWebglContext(canvas);

const vertexShader = makeVertexShader(vertCode);
const fragmentShader = makeFragmentShader(fragCode);

const prog = gl.createProgram();
gl.attachShader(prog, vertexShader);
gl.attachShader(prog, fragmentShader);
gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    const e = gl.getProgramInfoLog(prog);
    throw 'Cannot link program: ' + e;
}

const nb_vertices_per_line = 128;
const nb_lines = 32;
const nb_vertices = nb_lines * nb_vertices_per_line;

function makeLine(zPos) {
    var line = new Array(nb_vertices_per_line);

    let idx = 0;
    for (let vert_idx = 0; vert_idx < nb_vertices_per_line; vert_idx += 1) {
        line[idx + 0] = map(vert_idx, 0, nb_vertices_per_line, -1.0, 1.0); // x
        line[idx + 1] = 0.0; // y
        line[idx + 2] = zPos; // z
        idx += 3;
    }

    return line;
}

function makeLines() {
    const lines = new Array(nb_vertices * 3);
    let idx = 0;
    for (let i = 0; i < nb_lines; i++) {
        // for each line
        const line = makeLine(map(i, 0, nb_lines, -0.6, 0.9));
        // for each vertex's vector component
        for (let j = 0; j < line.length; j++) {
            lines[idx] = line[j];
            idx++;
        }
    }

    return lines;
}

const vertices = new Float32Array(makeLines());

const lines_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, lines_buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

const timeLocation = gl.getUniformLocation(prog, 'u_Time');
const vertexLocation = gl.getAttribLocation(prog, 'a_Vertex');
const mouseLocation = gl.getUniformLocation(prog, 'u_Mouse');

gl.enable(gl.DEPTH_TEST);
gl.clearColor(0, 0, 0, 0.0);

var t = 0;
function update(delta) {
    mouse[0] = lerp(mouse[0], flipMouseFlowX * mouseTarget[0], 0.05);
    mouse[1] = lerp(mouse[1], mouseTarget[1], 0.05);

    t += 0.1;
    if (t > 1024 * Math.PI) {
        t = 0;
    }
}

function draw() {
    gl.useProgram(prog);

    gl.uniform1f(timeLocation, t);
    gl.uniform2fv(mouseLocation, mouse);

    gl.vertexAttribPointer(vertexLocation, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexLocation);

    gl.drawArrays(gl.LINES, 0, nb_vertices);
}

function loop(timestamp) {
    const delta = timestamp - lastRender;

    update(delta);
    draw();

    lastRender = timestamp;
    window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);
