from enum import Enum

from pydantic import BaseModel

from app.models import Item, User


class AuctionStatus(str, Enum):
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    ENDED = "ENDED"


class Bid(BaseModel):
    item_id: Item.id
    bidder_id: User.id
    status: AuctionStatus
