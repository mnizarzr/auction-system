from datetime import datetime
from beanie import Document
from pydantic import BaseModel


class Item(Document, BaseModel):
    name: str
    min_amount: int
    min_increase: int
    description: str = ""
    start_time: datetime
    end_time: datetime



    class Settings:
        name = "items"