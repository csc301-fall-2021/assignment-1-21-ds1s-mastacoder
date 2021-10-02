import time
import os
import pytest

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep


@pytest.fixture
def website_index_url():
    return os.getenv("CLIENT_WEBSITE_INDEX_URL", "localhost:3000")


@pytest.fixture
def selenium_client(website_index_url):
    options = Options()
    options.headless = True
    
    chrome_driver = webdriver.Chrome("./chromedriver.exe", options=options)
    chrome_driver.get(website_index_url)
    chrome_driver.maximize_window()
    yield chrome_driver
    chrome_driver.quit()

