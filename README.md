# The Shopping Cart App 🛒

Basic store front that allows users to add products to their shopping cart and remove products with updated checkout total.
Discount codes can be applied to reduce the overall price.

## Instructions to Test Deployed Applications

The application is split into two components: React frontend & FastAPI Backend

There are 4 seperate deployments that can be accessed:

&nbsp;&nbsp;&nbsp;&nbsp;FastAPI-staging: https://a1-fastapi-staging.herokuapp.com/docs

&nbsp;&nbsp;&nbsp;&nbsp;FastAPI-production:  https://a1-fastapi-production.herokuapp.com/docs

&nbsp;&nbsp;&nbsp;&nbsp;storefront-staging:  https://a1-storefront-staging.herokuapp.com/docs

&nbsp;&nbsp;&nbsp;&nbsp;storefront-production: https://a1-storefront-production.herokuapp.com/docs

The fastapi routes can be tested on each environment with the openAPI playground independent to the backend code. 
This can be used to validate what we are passing back from the backend as well look at our model schemas for data without
having to dive into the code and installing dependencies.

Testing the frontend is as simple as playing around with the deployed front end. 

There are two types of discount codes declared in the backend to use:

&nbsp;&nbsp;&nbsp;&nbsp;GIVEMEMEAT - 50% off everything

&nbsp;&nbsp;&nbsp;&nbsp;FREEFRUITS - 100% off everything

## Instructions to Run Applications Locally (IF REQUIRED)

1. Clone the repo locally and cd into it
2. Install NodeJS and npm to install yarn (machine dependent preferred to be done in wsl)
   ~~~~
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
   nvm install node
   npm install -g yarn
   ~~~~
3. Install python >=3.8 Create a python virtual environment in server directory
   ~~~~
   cd server
   python -m venv env
   source activate/env/bin/activate
   ~~~~
   * Install python dependencies
    ~~~~
    pip install -r requirements/requirements.txt -r requirements/dev-requirements.txt
    ~~~~
4. Run backend (will need two terminals one for running backend and other for frontend)
    *  ~~~~
       python entrypoint.py
       ~~~~
5. Open new terminal and cd into client directory to install frontend requirements
    * ~~~~
      cd client
      yarn install
      ~~~~
6. Run frontend
    * ~~~~
      yarn start
      ~~~~
    
## Instructions to Run Tests Locally (IF REQUIRED)

If the last part is followed by setting up environments only minimal additions must be added.

1. cd from root into client_front_end_tests
2. Follow part (3) from running application locally to create venv

**Test Backend Unit Tests:**

  1. cd into server from root
  2. activate the venv for this directory (assuming dependencies installed)
  3. ~~~~
      sh run-tests.sh
      ~~~~
      * will run Pytest on all test files in server/api/tests/
      * reports coverage on all endpoint files and test case failure
      
**Test Frontend Unit Tests:**

  1. cd into client_front_end_tests from root
  2. activate the venv for this directory
  3. 
      ~~~~
      pip install -r requirements/requirements.txt
      ~~~~
  4. Ensure that the frontend and backend are running (follow from last section)
  4. ~~~~
     pytest .
     ~~~~
      * will run selenium headless client on frontend by clicking components and
      * validating their reactiveness and change in components

