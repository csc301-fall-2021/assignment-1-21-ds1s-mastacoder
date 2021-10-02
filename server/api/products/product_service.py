from typing import Union
from fastapi import HTTPException
from api.products.pseudo_db import products, discounts
from api.products.models import ProductResponseModel, ProductsResponseModel, NameOrUid, DiscountsResponseModel
from api.settings import settings


def get_all_products() -> ProductsResponseModel:
    modified_products = []
    for product in products:
        img_adjusted_product = ProductResponseModel(**product.dict())
        modified_products.append(img_adjusted_product)
        img_adjusted_product = settings.IMAGE_SERVER_BASE_URL + img_adjusted_product.img_url
    return ProductsResponseModel(products=modified_products)

def get_product(identifier: NameOrUid, value_to_identify: Union[str, int]):
    for product in products:
        if product.dict()[identifier] == value_to_identify:
            return product
    raise HTTPException(status_code=404, detail=f"Item not found by {identifier} with value {value_to_identify}")


def get_all_discounts() -> DiscountsResponseModel:
    return DiscountsResponseModel(discounts=discounts)
