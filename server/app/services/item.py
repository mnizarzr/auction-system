from fastapi import UploadFile

from app.models.item import Item


async def save(item: Item):
    new_item = item
    await new_item.insert()
    return new_item


async def upload_item_pictures(file: UploadFile):
    print(file)
    return