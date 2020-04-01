function startAnimation(t = 0, redraw = () => {}, shadershit = () => {}) {
    const animate = (t = 0) => {
        redraw.bind(this)(t);
        shadershit.bind(this)();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(animate.bind(this));
    }
    animate.bind(this)(0)
    return animate
}

export default {
    startAnimation
}