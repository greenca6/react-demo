#!/bin/sh

if [ -z "$HEROKU_TOKEN" ]; then
  echo "Can't deploy to Heroku without a Heroku Token. Exiting...";
  exit 1;
fi

echo "machine api.heroku.com" > ~/.netrc
echo "  login greenca6@gmail.com" >> ~/.netrc
echo "  password $HEROKU_TOKEN" >> ~/.netrc
echo "machine git.heroku.com" >> ~/.netrc
echo "  login greenca6@gmail.com" >> ~/.netrc
echo "  password $HEROKU_TOKEN" >> ~/.netrc

# Login to the Heroku docker registry
docker login --username=_ --password=$HEROKU_TOKEN registry.heroku.com

APP_NAME="rover-explorer"

# Deploy the App
echo "Deploying App..."
heroku container:push web -a $APP_NAME
heroku container:release web -a $APP_NAME

echo "Deploy Script Complete"