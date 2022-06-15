from app.models.user import User


async def save(user):
    new_user = User(full_name=user.full_name, email=user.email, password=user.password)
    await new_user.insert()
    return new_user


async def find_user_by_id(user_id):
    user = await User.get(user_id)
    return user
