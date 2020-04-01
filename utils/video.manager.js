function setupVertexShaderCommunicationBuffer(bufferName, threeGeometry) {
    //VERTEX SHADER COMUNICATION BUFFER
    this[bufferName] = new Float32Array(threeGeometry.attributes.position.count);
    for (let index = 0; index < this[bufferName].length; index++) {
        this[bufferName][index] = 0;
    }

    //BINDING SHADER COMUNICATION PIPE
    threeGeometry.addAttribute(bufferName, new THREE.BufferAttribute(threeGeometry, 1));
}

export default {
    setupVertexShaderCommunicationBuffer
}