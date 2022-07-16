from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_login_success():
    response = client.post("/v1/auth/token", data={"username": "user1@user.com", "password": "user1234"})
    print(response.json())
    assert response.status_code == 200
    assert "access_token" in response.json()
