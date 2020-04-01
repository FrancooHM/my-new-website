module.exports = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float r;
uniform float g;
uniform float b;

void main() {
	gl_FragColor = vec4(gl_FragCoord.x / 1400.0, gl_FragCoord.y / 1400.0, gl_FragCoord.z, 1);
}
`