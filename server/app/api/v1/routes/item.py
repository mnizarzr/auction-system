from beanie import PydanticObjectId
from fastapi import APIRouter, HTTPException, UploadFile

from app.models.item import Item
from app.services import item as item_service

router = APIRouter()


@router.post("/")
async def create_item(item: Item):
    new_item = await item_service.save(item)
    return new_item


@router.get("/check/{item_id}")
async def check_item_eligibility(item_id: PydanticObjectId):
    try:
        item = await item_service.check_item_eligibility(item_id=item_id)
        return item
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/{item_id}")
async def get_item(item_id: PydanticObjectId):
    item = await item_service.get(item_id=item_id)
    return item


@router.delete("/{item_id}")
async def delete_item(item_id: PydanticObjectId):
    item = await item_service.delete(item_id=item_id)
    return item


@router.post("/picts")
async def upload_pictures(file: UploadFile):
    uploaded_files = await item_service.upload_item_pictures(file)
    return uploaded_files
