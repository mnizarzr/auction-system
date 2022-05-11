import typing

from fastapi import APIRouter
from starlette.endpoints import WebSocketEndpoint
from starlette.websockets import WebSocket

router = APIRouter()


@router.websocket_route("/bid", name="bid")
class BidHub(WebSocketEndpoint):
    """ Bid hub websocket, handling live bidding """

    encoding: str = "json"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    async def on_connect(self, websocket: WebSocket) -> None:
        pass

    async def on_disconnect(self, websocket: WebSocket, close_code: int) -> None:
        pass

    async def on_receive(self, websocket: WebSocket, data: typing.Any) -> None:
        pass
