const connect = e => {
    const ip = e.address.value

    const cam1 = document.querySelector("#camera1")
    const cam2 = document.querySelector("#camera2")
    
    cam1.src = `http://${ip}:9999/video0.jpg`
    cam2.src = `http://${ip}:9999/video1.jpg`

    return false
}