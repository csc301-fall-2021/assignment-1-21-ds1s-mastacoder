from selenium import webdriver

class TestMetaDataOfPage:
    
    def test_title_of_webpage(self, selenium_client: webdriver.Chrome):
        assert selenium_client.title == "CSC301 - A1 Storefront"
