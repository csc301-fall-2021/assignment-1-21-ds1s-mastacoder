from fastapi import FastAPI
from api.settings import settings
from fastapi.middleware.cors import CORSMiddleware
from api.products.product_controller import product_router
from api.health.health_controller import health_router
from api.settings import settings

app = FastAPI(title=settings.PROJECT_NAME)


app.include_router(health_router, tags=["Health"])
app.include_router(product_router, tags=["Products & Discounts"], prefix="/products")


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ALLOWED_ORIGINS,
    allow_methods=settings.ALLOWED_METHODS,
    allow_headers=settings.ALLOWED_HEADERS,
)



