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
        description="An avacoda that is super good",
        price=10.14,
        img_url="img1.jpg"
    ), 
    ProductResponseModel(
        id=2, 
        name="Apple",
        description="Apples from florida",
        price=10.12,
        img_url="img2.jpg"
    ), 
    ProductResponseModel(
        id=3, 
        name="Pear",
        description="An ordinary Pear",
        price=10.11,
        img_url="img3.jpg"
    ),
    ProductResponseModel(
        id=4, 
        name="Mushroom",
        description="Mushrooms locally picked",
        price=23.22,
        img_url="img4.jpg"
    ),
    ProductResponseModel(
        id=5, 
        name="Chicken",
        description="Chicken Breast",
        price=43.41,
        img_url="img5.jpg"
    ),
    ProductResponseModel(
        id=6, 
        name="Strawberries",
        description="Locally farmed strawberries",
        price=10.51,
        img_url="img6.jpg"
    ),
    ProductResponseModel(
        id=7, 
        name="Watermelon",
        description="Really big watermelons",
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