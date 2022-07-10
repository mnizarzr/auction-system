from datetime import datetime
from typing import List, Optional

from beanie import Document, PydanticObjectId
from pydantic import BaseModel


class Item(Document, BaseModel):
    title: str
    description: str = ""
    starting_price: int
    min_increase: int
    start_time: datetime
    end_time: datetime
    created_by: PydanticObjectId
    pictures: List[str]
    subcategory_id: Optional[PydanticObjectId]

    class Settings:
        name = "items"
