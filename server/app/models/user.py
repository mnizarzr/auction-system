from beanie import Document, Insert, Replace, before_event, PydanticObjectId
from pydantic import BaseModel, EmailStr, Field

from app.utils.auth import get_password_hash


class User(Document, BaseModel):
    """ Beanie Model
    It's what inserted into mongo database
    _id autopopulated """
    full_name: str
    email: EmailStr
    password: str

    class Settings:
        name = "users"

    @before_event([Insert, Replace])
    def hash_password(self):
        hashed_pwd = get_password_hash(self.password)
        self.password = str(hashed_pwd)


class UserRequest(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    """ DTO """
    id: PydanticObjectId = Field(None, alias="_id")
    full_name: str
    email: EmailStr
