from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


class TestItem:
    def test_get_user(self):
        pass
