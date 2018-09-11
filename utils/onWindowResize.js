module.exports = (_this, window) => {
    return () => {
        _this.state.camera.aspect = window.innerWidth / window.innerHeight
        _this.state.camera.updateProjectionMatrix()
        _this.state.renderer.setSize(window.innerWidth, window.innerHeight)
    }
}