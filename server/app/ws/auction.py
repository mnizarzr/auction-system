from bson import ObjectId
from socketio import AsyncNamespace

from app.core.redis import get_connection
from app.services.auth import get_current_user
from app.services.user import User as UserService


class Auction(AsyncNamespace):
    async def on_connect(self, sid, environ, auth):
        try:
            current_user = await get_current_user(auth["token"])
        except Exception:
            raise ConnectionRefusedError("Authentication failed")

        async with self.session(sid) as session:
            session['user_id'] = str(current_user.id)

    async def on_join_bid(self, sid, data):
        if data["item_id"] is None:
            return
        self.enter_room(sid, data["item_id"])

    async def on_add_bid(self, sid, data):
        async with self.session(sid) as session:
            bidder_id = session["user_id"]
        current_user = await UserService.get(bidder_id)
        item_id = data["item_id"]
        amount = data["amount"]
        bid_id = ObjectId()
        bid = {
            "bid_id": str(bid_id),
            "amount": amount,
            "item_id": item_id,
            "bidder_id": bidder_id
        }
        redis = await get_connection()
        await redis.hset(str(bid_id), mapping=bid)
        await self.emit("new_bid", f'{current_user.full_name} bid {amount}', room=item_id)
