from fastapi import Response

class TestHealthController:
    def test_response_from_health_check(self, test_client):
        response: Response = test_client.get("/health")
        assert response.status_code == 200
        assert response.body == {"I am up and running": ":)"}