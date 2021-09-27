from pydantic import BaseSettings
from typing import List, Set

from pydantic.fields import Field

class Settings(BaseSettings):
    ENVIRONMENT: str = Field(default="local", env="ENVIRONMENT")
    IMAGE_SERVER_BASE_URL = Field(default="https://u.mkn.cx/misc/csc301p1/", env="IMAGE_SERVER_BASE_URL")

    # CORS related settings
    CORS_ALLOWED_ORIGINS: List[str] = Field(default=[""], env="CORS_ALLOWED_ORIGINS")
    ALLOWED_METHODS: List[str] = Field(default=["*"], env="ALLOWED_METHODS")
    ALLOWED_HEADERS: List[str] = Field(default=["*"], env="ALLOWED_HEADERS")

    PROJECT_NAME: str = Field(default="A1 Assignment", env="PROJECT_NAME")


settings = Settings()
