from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


class TestItem:
    def test_create_item(self):
        pass
