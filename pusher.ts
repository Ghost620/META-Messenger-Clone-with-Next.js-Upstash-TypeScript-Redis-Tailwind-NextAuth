import Pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
    appId: "1541354",
    key: "55cf5cb89ecc89df9496",
    secret: "0841cd95e0d5addbb545",
    cluster: "ap2",
    useTLS: true
})

export const clientPusher = new ClientPusher('55cf5cb89ecc89df9496', {
    cluster: 'ap2',
    forceTLS: true
});