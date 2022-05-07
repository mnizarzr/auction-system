from beanie import init_beanie
from fastapi import FastAPI
from app.api.router import api_router
from app.core.db import db, connect as connect_mongo, disconnect as disconnect_mongo
from app.core.redis import init_redis_pool
from app.models import __beanie_models__

app = FastAPI()


@app.on_event("startup")
async def startup_event():
    await connect_mongo()
    await init_beanie(database=db.database, document_models=__beanie_models__)
    app.state.redis = await init_redis_pool()


@app.on_event("shutdown")
async def shutdown_event():
    await disconnect_mongo()
    await app.state.redis.close()


app.include_router(api_router)