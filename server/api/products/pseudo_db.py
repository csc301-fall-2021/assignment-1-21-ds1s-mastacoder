from api.products.models import ProductResponseModel, ProductType, DiscountModel, ReductionType

products = [
    ProductResponseModel(
        id=0, 
        product_name="Steak",
        type=ProductType.MEAT,
        description="Succulent meat mmm yea",
        price=10.50,
        quanity=30,
        img_url="img0.jpg"
    ), 
    ProductResponseModel(
        id=1, 
        product_name="Avacado",
        type=ProductType.VEGATABLES,
        description="Succulent meat mmm yea",
        price=10.50,
        quanity=20,
        img_url="img1.jpg"
    ), 
    ProductResponseModel(
        id=2, 
        product_name="Apple",
        type=ProductType.FRUIT,
        description="Succulent meat mmm yea",
        price=10.50,
        quanity=15,
        img_url="img2.jpg"
    ), 
    ProductResponseModel(
        id=3, 
        product_name="Pear",
        type=ProductType.FRUIT,
        description="Succulent meat mmm yea",
        price=10.50,
        quanity=50,
        img_url="img3.jpg"
    ),
    ProductResponseModel(
        id=4, 
        product_name="Mushroom",
        type=ProductType.VEGATABLES,
        description="Succulent meat mmm yea",
        price=23,
        quanity=20,
        img_url="img4.jpg"
    ),
    ProductResponseModel(
        id=5, 
        product_name="Chicken",
        type=ProductType.MEAT,
        description="Succulent meat mmm yea",
        price=43,
        quanity=20,
        img_url="img5.jpg"
    ),
    ProductResponseModel(
        id=6, 
        product_name="Strawberries",
        type=ProductType.FRUIT,
        description="Succulent meat mmm yea",
        price=10.50,
        quanity=20,
        img_url="img6.jpg"
    ),
]

discounts = [
    DiscountModel(
        discount_code="GIVEMEMEAT",
        apply_on_types=[ProductType.MEAT],
        reduction_type=ReductionType.PERCENTOFF,
        amount_off=0.5
    ),
    DiscountModel(
        discount_code="FREEFRUITS",
        apply_on_types=[ProductType.FRUIT],
        reduction_type=ReductionType.PERCENTOFF,
        amount_off=1.0
    ),
]