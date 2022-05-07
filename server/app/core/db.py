from motor.motor_asyncio import AsyncIOMotorClient

from app.core.config import config


class DbConnection:
    client: AsyncIOMotorClient = None
    database = None


db = DbConnection()


async def connect():
    db.client = AsyncIOMotorClient(config.MONGO_URL)
    db.database = db.client[config.MONGO_DB]


async def disconnect():
    if db.client is not None:
        db.client.close()
