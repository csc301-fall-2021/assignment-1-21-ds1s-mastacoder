import time
import os
import pytest

from selenium import webdriver
from selenium.webdriver import ChromeOptions
from webdriver_manager.chrome import ChromeDriverManager


@pytest.fixture
def website_index_url():
    return os.getenv("CLIENT_WEBSITE_INDEX_URL", "localhost:3000")


@pytest.fixture
def selenium_client(website_index_url):
    options = ChromeOptions()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--headless")
    chrome_driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

    chrome_driver.get(website_index_url)
    chrome_driver.maximize_window()
    yield chrome_driver
    chrome_driver.quit()

