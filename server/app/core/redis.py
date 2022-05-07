import aioredis

from app.core.config import config


async def init_redis_pool() -> aioredis.Redis:
    redis = await aioredis.from_url(config.REDIS_URL, decode_responses=True)
    return redis
