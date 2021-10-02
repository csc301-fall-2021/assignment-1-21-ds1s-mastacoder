import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

class TestAddStoreItem:

    def test_add_1_of_each_item(self, selenium_client: webdriver.Chrome):
        item_add_btns = selenium_client.find_elements_by_xpath("//*[text()='Add to cart']")
                                                
        assert item_add_btns

        for btn in item_add_btns:
            btn.click()
        
        items_in_cart = selenium_client.find_elements_by_xpath("//*[text()='Remove']")

        assert len(item_add_btns) == len(items_in_cart)

    def test_adding_maximum_number_of_items(self, selenium_client: webdriver.Chrome):
        item_add_btn = selenium_client.find_element_by_xpath("//*[text()='Add to cart']")
        assert item_add_btn

        for _ in range(99):
            item_add_btn.click()
            time.sleep(0.05)

        remove_btn = selenium_client.find_elements_by_xpath("//*[text()='Remove']")[0]

        quanity_count_select_box = selenium_client.find_element_by_xpath("//div[text()='99']")

        assert int(quanity_count_select_box.text) == 99


        
                                            