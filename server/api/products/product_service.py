from typing import Union
from fastapi import HTTPException
from api.products.pseudo_db import products, discounts
from api.products.models import ProductsResponseModel, NameOrUid, DiscountsResponseModel


def get_all_products() -> ProductsResponseModel:
    return ProductsResponseModel(products=products)

def get_product(identifier: NameOrUid, value_to_identify: Union[str, int]):
    for product in products:
        if product.dict()[identifier] == value_to_identify:
            return product
    raise HTTPException(status_code=404, detail=f"Item not found by {identifier} with value {value_to_identify}")


def get_all_discounts() -> DiscountsResponseModel:
    return DiscountsResponseModel(discounts=discounts)
