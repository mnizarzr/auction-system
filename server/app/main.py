import socketio
from beanie import init_beanie
from fastapi import FastAPI, logger
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import api_router
# from app.ws.bidhub import BidHub
from app.core.db import (
    db,
    connect as connect_mongo,
    disconnect as disconnect_mongo
)
from app.core.redis import (
    init_redis_pool,
    disconnect as disconnect_redis
)
from app.models import __beanie_models__
from app.ws.auction import Auction

app = FastAPI()

sio = socketio.AsyncServer(async_mode="asgi", logger=logger, cors_allowed_origins='*')
sio_app = socketio.ASGIApp(socketio_server=sio, socketio_path="/")
sio.register_namespace(Auction("/bid"))

app.mount("/sio", sio_app)  # type: ignore


@app.on_event("startup")
async def startup_event():
    await connect_mongo()
    await init_beanie(
        database=db.database,
        document_models=__beanie_models__
    )
    await init_redis_pool()


@app.on_event("shutdown")
async def shutdown_event():
    await disconnect_mongo()
    await disconnect_redis()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)
# app.add_websocket_route("/bid/{item_id}", BidHub)
