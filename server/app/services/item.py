from datetime import datetime
from fastapi import UploadFile
from uuid import uuid4
from app.models.item import Item
import aiofiles

DATE_FORMAT = "%Y-%m-%dT%H:M:S.%f%z"


async def save(item: Item):
    new_item = item
    await new_item.insert()
    return new_item


async def get(item_id):
    return await Item.get(item_id)


async def delete(item_id):
    item = await Item.get(item_id)
    await item.delete()
    return f"{item_id} deleted"


async def upload_item_pictures(file: UploadFile):
    file_content_type = file.content_type
    file_extension = file_content_type.split("/")[1]
    file_name = str(uuid4())
    file_full_name = file_name + "." + file_extension
    destination_path = "/app/static/images"
    async with aiofiles.open(f"{destination_path}/{file_full_name}", "wb") as out:
        while content := await file.read(1024):
            await out.write(content)
        await out.close()
    return file_full_name


async def check_item_eligibility(item_id):
    item = await Item.get(item_id)
    if item is None:
        raise Exception({"Item not found"})
    if item.start_time >= datetime.utcnow():
        raise Exception("Bidding not started yet")
    if item.end_time <= datetime.utcnow():
        raise Exception("Bidding has ended")
