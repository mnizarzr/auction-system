from fastapi import APIRouter
from app.api.v1.routes import user

api_router = APIRouter()
api_router.include_router(user.router, prefix="/user", tags=["user"])


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
