from fastapi.testclient import TestClient
from api.main import app

client = TestClient(app)

def test_read_products():
    response = client.get('/products')
    assert response.status_code == 200
    msg = response.json()
    assert len(msg) > 0


def test_product_prices_above_zero():
    response = client.get('/products')
    assert response.status_code == 200
    msg = response.json()
    for product in msg['products']:
        assert product['price'] > 0
