from fastapi import APIRouter

from app.api.v1.router import api_router as app_v1_router

api_router = APIRouter()
api_router.include_router(app_v1_router, prefix="/v1")
