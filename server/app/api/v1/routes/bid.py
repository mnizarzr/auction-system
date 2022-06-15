import typing

from starlette.endpoints import WebSocketEndpoint
from starlette.websockets import WebSocket
from app.services.auth import get_current_user


EVENT_BID = "EVENT_BID"
EVENT_AUTH = "EVENT_AUTH"


class BidHub(WebSocketEndpoint):
    """Bid hub websocket, handling live bidding"""

    encoding: str = "json"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    async def on_connect(self, websocket: WebSocket) -> None:
        await websocket.accept()

    async def on_disconnect(self, websocket: WebSocket, close_code: int) -> None:
        pass

    async def on_receive(self, websocket: WebSocket, data: typing.Any) -> None:
        if data["type"] == EVENT_AUTH:
            try:
                user = await get_current_user(data["payload"]["token"])
            except Exception:
                await websocket.close(1001, reason="Forbidden user")

        if data["type"] == EVENT_BID:
            pass