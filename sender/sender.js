const WebSocket = new WebSocket("ws://127.0.0.1:5500")

let username
function sendUsername(){
    username = document.getElementById("username-input").value
    sendData({
        type: "store_user"
    })
}

function sendData(data) {
    data.username = username
    WebSocket.send(JSON.stringify(data))
}


let localStream
function startCall() {
    document.getElementById("video-call-div").style.display = "inline"

    navigator.getUserMedia({
        video: {
            frameRate: 24,
            width: {
                min: 480, ideal: 720, max: 1280
            },
            aspectRatio: 1.33333
        },
        audio: true
    }, (stream) => {
        localStream = stream
        document.getElementById("local-video").srcObject = localstream
    }, (error) => {
        console.log(error)
    })
}