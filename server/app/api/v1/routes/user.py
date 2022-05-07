from beanie import PydanticObjectId
from fastapi import APIRouter

from app.models import UserRequest, UserResponse
from app.services import user as user_service

router = APIRouter()


@router.get("/{user_id}")
async def get_user(user_id: PydanticObjectId):
    user = await user_service.find_user_by_id(user_id)
    return user


@router.post("/", response_model=UserResponse)
async def create_user(user: UserRequest):
    new_user = await user_service.save(user)
    return new_user
