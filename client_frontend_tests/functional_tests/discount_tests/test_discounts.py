from selenium import webdriver



class TestEnteringDiscounts:

    def test_entering_discount_code_and_applying_discount(self, selenium_client: webdriver.Chrome):
        discount_text_box = selenium_client.find_element_by_xpath("//input[@type='text']")
        total_cost_header_tag = selenium_client.find_element_by_xpath("//*[text()='Total: ']/b")
        before_discount_total_cost_text = total_cost_header_tag.text.lstrip("$")
        discount_text_box.send_keys("GIVEMEMEAT")
        selenium_client.find_element_by_xpath("//*[text()='Apply']").click()
        after_discount_total_cost_text = total_cost_header_tag.text.lstrip("$")
        assert float(after_discount_total_cost_text) <= float(before_discount_total_cost_text)