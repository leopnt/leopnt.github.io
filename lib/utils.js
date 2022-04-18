'use strict';

/**
 * @param {string} id
 * @return {HTMLCanvasElement} Returns an html canvas element
 */
function getCanvas(id) {
    var canvas;

    canvas = document.getElementById(id);
    if (!canvas) {
        throw new Error(`Cannot get canvas with id: ${id}`);
    }

    return canvas;
}

/**
 * @param {HTMLCanvasElement} canvas The canvas to get the context from
 * @return {WebGLRenderingContext} Returns a webgl rendering context
 */
function getWebglContext(canvas) {
    var ctx;

    ctx = canvas.getContext('webgl');
    if (!ctx) {
        throw new Error('Cannot get webgl context');
    }

    return ctx;
}

/**
 * @param {string} vertShaderCode The vertex shader code
 * @return {WebGLShader} Returns the vertex shader
 */
function makeVertexShader(vertShaderCode) {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertShaderCode);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        const e = gl.getShaderInfoLog(vertexShader);
        throw 'Cannot compile vertex shader: ' + e;
    }

    return vertexShader;
}

/**
 * @param {string} fragShaderCode The fragment shader code
 * @return {WebGLShader} Returns the fragment shader
 */
function makeFragmentShader(fragShaderCode) {
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragCode);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        const e = gl.getShaderInfoLog(fragmentShader);
        throw 'Cannot compile fragment shader: ' + e;
    }

    return fragmentShader;
}

function map(value, from_min, from_max, to_min, to_max) {
    return (
        ((value - from_min) * (to_max - to_min)) / (from_max - from_min) +
        to_min
    );
}

function lerp(from, to, smoothness) {
    return from * (1 - smoothness) + to * smoothness;
}
