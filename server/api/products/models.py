from typing import List
from pydantic import BaseModel
from enum import Enum

class NameOrUid(str, Enum):
    NAME = "product_name"
    UID = "id"

class ReductionType(str, Enum):
    CASHOFF = "flat"
    PERCENTOFF = "percent"


class DiscountModel(BaseModel):
    discount_code: str
    reduction_type: ReductionType
    amount_off: float

class ProductResponseModel(BaseModel):
    id: int
    name: str
    description: str
    price: float
    img_url: str

class ProductsResponseModel(BaseModel):
    products: List[ProductResponseModel]

class DiscountsResponseModel(BaseModel):
    discounts: List[DiscountModel]



