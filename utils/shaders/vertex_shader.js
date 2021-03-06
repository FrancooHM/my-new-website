module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float r;
uniform float g;
uniform float b;

void main(){
    vec3 p = position;
    vec4 modelViewPosition = modelViewMatrix * vec4(p ,1.0);
    gl_Position = projectionMatrix * modelViewPosition;
}
`