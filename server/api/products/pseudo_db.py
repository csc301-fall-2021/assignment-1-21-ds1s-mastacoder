from api.products.models import ProductResponseModel, DiscountModel, ReductionType

products = [
    ProductResponseModel(
        id=0, 
        name="Steak",
        description="Succulent meat mmm yea",
        price=10.22,
        img_url="img0.jpg"
    ), 
    ProductResponseModel(
        id=1, 
        name="Avacado",
        description="Succulent meat mmm yea",
        price=10.14,
        img_url="img1.jpg"
    ), 
    ProductResponseModel(
        id=2, 
        name="Apple",
        description="Succulent meat mmm yea",
        price=10.12,
        img_url="img2.jpg"
    ), 
    ProductResponseModel(
        id=3, 
        name="Pear",
        description="Succulent meat mmm yea",
        price=10.11,
        img_url="img3.jpg"
    ),
    ProductResponseModel(
        id=4, 
        name="Mushroom",
        description="Succulent meat mmm yea",
        price=23.22,
        img_url="img4.jpg"
    ),
    ProductResponseModel(
        id=5, 
        name="Chicken",
        description="Succulent meat mmm yea",
        price=43.41,
        img_url="img5.jpg"
    ),
    ProductResponseModel(
        id=6, 
        name="Strawberries",
        description="Succulent meat mmm yea",
        price=10.51,
        img_url="img6.jpg"
    ),
    ProductResponseModel(
        id=7, 
        name="Watermelon",
        description="Succulent meat mmm yea",
        price=4.51,
        img_url="img7.jpg"
    ),
]

discounts = [
    DiscountModel(
        discount_code="GIVEMEMEAT",
        reduction_type=ReductionType.PERCENTOFF,
        amount_off=0.5
    ),
    DiscountModel(
        discount_code="FREEFRUITS",
        reduction_type=ReductionType.PERCENTOFF,
        amount_off=1.0
    ),
]