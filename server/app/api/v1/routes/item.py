from beanie import PydanticObjectId
from fastapi import APIRouter, Depends, File

from app.models.item import Item
from app.services import item as item_service

router = APIRouter()


@router.post("/")
async def create_item(item: Item):
    print(f'itemnya: {item}')
    new_item = await item_service.save(item)
    return new_item


# @router.post("/picts")
# async def upload_pictures(file: File):
#     print(file)
#     item_service.upload_item_pictures(file)
