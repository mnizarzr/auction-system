from pprint import pprint

from socketio import AsyncNamespace

from app.services.auth import get_current_user


class Auction(AsyncNamespace):
    async def on_connect(self, sid, environ, auth):
        # query_string: str = environ.get("QUERY_STRING")
        # item_id = query_string.split("&")[0].split("=")
        # pprint(item_id)
        # try:
        #     current_user = await get_current_user(auth["token"])
        # except Exception:
        #     raise ConnectionRefusedError("Authentication failed")

        async with self.session(sid) as session:
            session['user_id'] = "6294d99eae58b78f9e932ee0"

    async def on_join_auction(self, sid, data):
        pass
