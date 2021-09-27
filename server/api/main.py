from fastapi import FastAPI
from api.settings import settings
from api.products.product_controller import product_router

app = FastAPI(title=settings.PROJECT_NAME)


app.include_router(product_router, prefix="/products")


