from typing import Union
from fastapi import APIRouter, Path, Query
from api.products.models import NameOrUid, ProductResponseModel, ProductsResponseModel, DiscountsResponseModel
from api.products.product_service import (
    get_all_products,
    get_product,
    get_all_discounts
)

product_router = APIRouter()

@product_router.get(
    "/",
    response_model=ProductsResponseModel
)
def products_info():
    return get_all_products()

@product_router.get(
    "/{item_val}",
    response_model=ProductResponseModel
)
def product_info(
    item_val: Union[int, str] = Path(..., description="item's name or id"),
    name_or_uid: NameOrUid = Query(default=NameOrUid.UID, description="retrieve by name or uid")
):
    return get_product(name_or_uid, item_val)

@product_router.get(
    "/discounts/",
    response_model=DiscountsResponseModel
)
def discount_info():
    return get_all_discounts()