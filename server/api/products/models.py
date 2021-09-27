from typing import List
from pydantic import BaseModel
from enum import Enum

class NameOrUid(str, Enum):
    NAME = "product_name"
    UID = "id"

class ReductionType(str, Enum):
    CASHOFF = "CO"
    PERCENTOFF = "PO"

class ProductType(str, Enum):
    FRUIT = "FR"
    MEAT = "ME"
    VEGATABLES = "VEG"
    BAKERY = "BA"


class DiscountModel(BaseModel):
    discount_code: str
    apply_on_types: List[ProductType]
    reduction_type: ReductionType
    amount_off: float

class ProductResponseModel(BaseModel):
    id: int
    product_name: str
    type: ProductType
    description: str
    price: float
    img_url: str
    quanity: int

class ProductsResponseModel(BaseModel):
    products: List[ProductResponseModel]

class DiscountsResponseModel(BaseModel):
    discounts: List[DiscountModel]



