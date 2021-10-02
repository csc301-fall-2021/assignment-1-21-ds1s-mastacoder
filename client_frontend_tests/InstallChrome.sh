#!/bin/bash
# https://www.linkedin.com/pulse/running-selenium-web-tests-github-actions-moataz-nabil/
# script taken to install chrome installation onto machine
set -ex
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb