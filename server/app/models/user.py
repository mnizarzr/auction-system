import bcrypt
from beanie import Document, Insert, Replace, before_event, PydanticObjectId
from pydantic import BaseConfig, BaseModel, EmailStr, Field


class User(Document, BaseModel):
    """ Beanie Model """
    name: str
    email: EmailStr
    password: str

    class Config(BaseConfig):
        allow_population_by_alias = True

    @before_event([Insert, Replace])
    def hash_password(self):
        bytes_pwd = self.password.encode()
        salt = bcrypt.gensalt()
        hashed_pwd = bcrypt.hashpw(bytes_pwd, salt)
        self.password = str(hashed_pwd)


class UserRequest(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    """ DTO """
    id: PydanticObjectId = Field(None, alias="_id")
    name: str
    email: EmailStr
