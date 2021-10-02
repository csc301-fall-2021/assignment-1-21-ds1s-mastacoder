import pytest

from fastapi import HTTPException

from api.products.product_service import (
    get_all_products,
    get_all_discounts,
    get_product,
    get_all_discounts
)

from api.products.models import (
    ProductsResponseModel,
    DiscountsResponseModel,
    NameOrUid
)

from api.products.pseudo_db import (
    products,
    discounts
)

from api.settings import settings

class TestProductsInfoService:
    def test_service_get_all_products_adds_img_base_url(self):
        response: ProductsResponseModel = get_all_products()
        for product in response.products:
            product.img_url == settings.IMAGE_SERVER_BASE_URL + products[product.id].img_url

    def test_service_get_product_by_valid_id(self):
        assert get_product(NameOrUid.UID, 0) == products[0]
        assert get_product(NameOrUid.UID, 2) == products[2]
        assert get_product(NameOrUid.UID, 4) == products[4]

    def test_service_get_product_by_not_valid_id(self):
        with pytest.raises(HTTPException):
            get_product(NameOrUid.UID, 20)
            get_product(NameOrUid.UID, 42)
            get_product(NameOrUid.UID, 23)


class TestProductDiscountsService:
    def test_service_get_all_discounts(self):
        assert DiscountsResponseModel(discounts=discounts) == get_all_discounts()

    