import pytest
from fastapi import requests
from starlette.responses import Response
from api.products.models import (
    ReductionType,
    ProductResponseModel
)
from api.products.pseudo_db import (
    products
)

class TestProductsController:
    def test_read_products(self, test_client):
        response: Response = test_client.get('/products')
        assert response.status_code == 200
        msg = response.json()
        assert len(msg) > 0

    def test_read_product_by_id(self, test_client):
        response: Response = test_client.get("/products/0")
        assert response.status_code == 200
        msg = response.json()
        assert ProductResponseModel(**msg) == products[0]


    def test_product_prices_above_zero(self, test_client):
        response: Response = test_client.get('/products')
        assert response.status_code == 200
        msg = response.json()
        for product in msg['products']:
            assert product['price'] > 0

    def test_get_discounts_info(self, test_client):
        response: Response = test_client.get('/products/discounts/')
        assert response.status_code == 200
        msg = response.json()
        for discount in msg['discounts']:
            assert discount['reduction_type'] == ReductionType.CASHOFF \
                or discount['reduction_type'] == ReductionType.PERCENTOFF
            if discount['reduction_type'] == ReductionType.PERCENTOFF:
                discount['amount_off'] <= 1.0
