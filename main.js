const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Alpha",
        state: "0.0.1",
        startTimestamp: new Date(),
        largeImageKey: "logo2",
        largeImageText: "Gemini AIO",
        smallImageKey: "emoji2",
        smallImageText: "@GeminiAIO_"
    });

console.log("Successfully launched GeminiAIO")
});

rpc.login({
    clientId: "882827252742639616"
});