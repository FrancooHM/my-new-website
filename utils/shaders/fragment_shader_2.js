module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float r;
uniform float g;
uniform float b;

void main() {
	gl_FragColor = vec4(r,g,b,1.0);
}
`