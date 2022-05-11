import aioredis

from app.core.config import config

redis: aioredis.Redis = None  # type: ignore


async def init_redis_pool() -> aioredis.Redis:
    global redis
    redis = await aioredis.from_url(config.REDIS_URL, decode_responses=True)
    return redis


async def get_connection():
    if redis is not None:
        return redis
    return await init_redis_pool()


async def disconnect():
    if redis is not None:
        await redis.close()
