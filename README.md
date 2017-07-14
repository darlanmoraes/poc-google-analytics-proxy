# POC - Proxy Google Analytics
Here you can find two modules that were used to test if it is possible to proxy data to **Google Analytics** servers. Both will run on port `8000` and will redirect all `GET` parameters to **Google** servers.

### How Can I Run Kong Version? ###
You can just start with **Docker Compose**. The containers used will export all necessary ports. Following are the commands to start the containers:
```sh
~/ cd kong-version
~/kong-version docker-compose -f docker-compose.yml build
~/kong-version docker-compose -g docker-compose.yml up --force-recreate
```

After this step we need to register the **Google Analytics** *API* on **Kong**:
```sh
curl -v -X POST \
-d 'name=www.google-analytics.com' \
-d 'hosts=www.google-analytics.com' \
-d 'upstream_url=http://www.google-analytics.com' \
"http://localhost:8001/apis/"
```

Now it is possible to call **Google Analytics** through **Kong** proxy:
```sh
curl -v -X POST \
-H "Host: www.google-analytics.com" \
-d 'v=1&tid=UA-102584845-1&cid=35009a79-1a05-49d7-b876-2b884d0f825b&t=pageview&dp=home' \
'http://localhost:8000/collect'
```

### How Can I Run Node Version? ###
You can just start with **Docker Compose**. The container used will export only the port `8000`. Following are the commands to start the container:
```sh
~/ cd node-version
~/node-version docker-compose -f docker-compose.yml build
~/node-version docker-compose -g docker-compose.yml up --force-recreate
```

Now it is possible to call **Google Analytics** through **Node** proxy:
```sh
curl -v -X POST \
-d 'v=1&tid=UA-102584845-1&cid=35009a79-1a05-49d7-b876-2b884d0f825b&t=pageview&dp=home' \
'http://localhost:8000/collect'
```
