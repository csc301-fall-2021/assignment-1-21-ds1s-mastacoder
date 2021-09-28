import uvicorn
from api.settings import settings

if __name__ == "__main__":
    uvicorn.run("api.main:app", host="0.0.0.0", port=int(settings.PORT), reload=True)