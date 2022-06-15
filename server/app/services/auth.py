from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt

from app.core.config import config
from app.models import User
from app.models.auth import TokenData
from app.utils.auth import ALGORITHM, verify_password

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/v1/auth/token")


async def authenticate_user(data):
    user = await User.find_one(User.email == data.username)
    if not user:
        return False
    if not verify_password(data.password, user.password):
        return False
    return user


async def get_current_user_oauth(token: str = Depends(oauth2_scheme)):
    return get_current_user(token)

async def get_current_user(token: str):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, config.SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = await User.find_one(User.email == token_data.email)
    if user is None:
        raise credentials_exception
    return user
