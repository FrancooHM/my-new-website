module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float r;
uniform float g;
uniform float b;
attribute float vertexDisplacement;
void main(){
    vec3 p = position;
    p.x = p.x + sin(vertexDisplacement) * 30.0;
    p.y = p.y + cos(vertexDisplacement) * 30.0;
    p.z = p.z + cos(vertexDisplacement) * 30.0;

    vec4 modelViewPosition = modelViewMatrix * vec4(p ,1.0);
    gl_Position = projectionMatrix * modelViewPosition;
}
`