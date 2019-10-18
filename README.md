# ConceptionObjetTpDocker

## TypeScript Express server - Starter

## Get started

Ensure you have `make` installed on your system.

After cloning the repository run:
```bash
make init
```

Now you can start|stop|restart your server by running:
```bash
make start|stop|restart
```

Your server will listen by default on port `3000` of your `$DOCKER_HOST`

You can access the server logs by running:
```bash
make log
```

If you want to stop and destroy your docker containers:
```bash
make down
```

Launch dependencies install with:
```bash
make install
```

## Running a command in a running container

To run a command in your container, run the following:
```bash
docker exec <container_name> <command>
```
eg:

```bash
docker exec starter-back_server sudo rm -rf /
```

## Running a command in a stopped/failed container

You will have to run a command through `docker-compose`:
```bash
docker-compose run --rm <service_name> <command>
```
eg:

```bash
docker-compose run --rm node npm install --save-dev typescript
```

## Access your container

To connect to a container, run:
```bash
docker exec -ti <container_name> sh
```
