import { useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const SIO_URL = "localhost:8080";
const BID_NAMESPACE = "/bid"

const socket = io(SIO_URL + BID_NAMESPACE, {
    auth: { token: localStorage.getItem("token") },
    path: "/sio", transports: ["websocket"],
    autoConnect: false
})

function TestSocket() {

    const [jwt, setJwt] = useState(null)
    const [itemId, setItemId] = useState(null)
    const [amount, setAmount] = useState(null)

    const submit = (event) => {

        localStorage.setItem("token", jwt)

        socket.connect()
        socket.on('connect', () => {
            console.log(socket.id);
        })
        socket.on('new_bid', (args) => {
            console.log(args);
        })
        socket.emit('join_bid', { item_id: itemId })
        socket.emit('add_bid', { item_id: itemId, amount })


        event.preventDefault()
    }

    return (
        <form onSubmit={submit}>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">JWT</span>
                </label>
                <input type="text" value={jwt} onChange={e => setJwt(e.target.value)} placeholder="Enter JWT" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Item ID</span>
                </label>
                <input type="text" value={itemId} onChange={e => setItemId(e.target.value)} placeholder="Enter Item Id" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Amount</span>
                </label>
                <input type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter Amount" class="input input-bordered w-full max-w-xs" />
            </div>
            <button className="btn mt-10" type="submit" >Submit</button>
        </form>

    );
}

async function saveJwt() {

}

export default TestSocket;
