import logging
import typing
from enum import Enum

from bson import ObjectId

from app.core.redis import get_connection
from starlette.endpoints import WebSocketEndpoint
from starlette.websockets import WebSocket

from app.models import User
from app.services.auth import get_current_user


class EventType(Enum):
    EVENT_BID = "EVENT_BID"
    EVENT_AUTH = "EVENT_AUTH"


class BidGroup:
    pass

class BidHub(WebSocketEndpoint):
    """Bid hub websocket, handling live bidding"""

    encoding: str = "json"
    user: User

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    async def on_connect(self, websocket: WebSocket) -> None:
        await websocket.accept()

    async def on_disconnect(self, websocket: WebSocket, close_code: int) -> None:
        pass

    async def on_receive(self, websocket: WebSocket, data: typing.Any) -> None:
        pass
        # item_id = websocket.path_params.get("item_id")
        #
        # if EventType(data["type"]) == EventType.EVENT_AUTH:
        #     try:
        #         self.user = await get_current_user(data["payload"]["token"])
        #         await websocket.send_json({"success": True})
        #     except Exception as exc:
        #         await websocket.close(1001, reason="Forbidden user")
        #
        # match EventType(data["type"]):
        #     case EventType.EVENT_BID:
        #         payload = data["payload"]
        #         bid_id = ObjectId()
        #         bid = {
        #             "amount": payload.get("amount"),
        #             "bidder_id": str(self.user.id),
        #             "item_id": item_id
        #         }
        #         redis = await get_connection()
        #         await redis.hset(str(bid_id), mapping=bid)
        #     case _:
        #         logging.info("there is nothing to do")
