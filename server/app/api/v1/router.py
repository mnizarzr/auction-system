from fastapi import APIRouter

from app.api.v1.routes import user, auth, item

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(user.router, prefix="/users", tags=["User"])
api_router.include_router(item.router, prefix="/items", tags=["Item"])


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
