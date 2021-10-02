import requests
import pytest
from fastapi.testclient import TestClient
from api.main import app


@pytest.fixture(scope="module")
def test_client():
    return TestClient(app)
