const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Server");

})

socket.addEventListener("message", (message) => {
    console.log("just got this: " , message.data, "form the server")
})

socket.addEventListener("close", () => {
    console.log("DisConnected the server")
})

setTimeout( () => {
    socket.send("hello from the browser!");
}, 10000)