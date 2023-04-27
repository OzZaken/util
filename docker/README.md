# What is Docker?
Docker is an open-source containerization platform that allows you to quickly build, test, and deploy applications as portable, self-sufficient containers. It simplifies the process of deploying applications and makes it easier to create, deploy, and run applications.

# basic commands
| Command                         | Explanation                                                                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docker build`                  | Build an image from a Dockerfile                                                                                                                                          |
| `docker run`                    | Run a container from an image                                                                                                                                             |
| `docker ps`                     | List running containers                                                                                                                                                   |
| `docker images`                 | List local images                                                                                                                                                         |
| `docker pull`                   | Pull an image from a registry                                                                                                                                             |
| `docker push`                   | Push an image to a registry                                                                                                                                               |
| `docker stop`                   | Stop a running container                                                                                                                                                  |
| `docker rm`                     | Remove a stopped container                                                                                                                                                |
| `docker rmi`                    | Remove a local image                                                                                                                                                      |
| `docker exec`                   | Run a command in a running container                                                                                                                                      |
| `docker logs`                   | View the logs of a container                                                                                                                                              |
| `docker network`                | Manage Docker networks                                                                                                                                                    |
| `docker-compose`                | Define and run multi-container Docker applications using a YAML file                                                                                                      |
| `docker swarm`                  | Manage a swarm of Docker nodes and services                                                                                                                               |
| `docker version`                |                                                                                                                                                                           |
| `docker-compose down --rmi all` | command is used to stop and remove the containers, networks, and volumes associated with a Docker Compose project, and it also removes all images created by the project. |

# some Docker Images
| Docker Image Name                                    | Description                                                                                                       |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [nginx](https://hub.docker.com/_/nginx)              | A popular web server that can be used as a reverse proxy, load balancer, or HTTP cache.                           |
| [Apache HTTP Server](https://hub.docker.com/_/httpd) | Another popular web server that is widely used and can also be used as a reverse proxy or load balancer.          |
| [MySQL](https://hub.docker.com/_/mysql)                                                | A popular open-source relational database management system that is widely used in web development.               |
| PostgreSQL                                           | Another open-source relational database management system that is highly scalable and supports advanced features. |
| Redis                                                | An open-source in-memory data structure store that can be used as a database, cache, or message broker.           |
| Elasticsearch                                        | An open-source search engine that can be used to search, analyze, and visualize data.                             |
| Docker Compose                                       | A tool for defining and running multi-container Docker applications.                                              |
| phpMyAdmin                                           | A web-based interface for managing MySQL databases.                                                               |
| Adminer                                              | Another web-based database management tool that supports MySQL, PostgreSQL, SQLite, and more.                     |
| Portainer                                            | A web-based Docker management interface that allows you to manage your Docker containers, images, and networks.   |

| Docker Image Name | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| Nextcloud         | An open-source self-hosted cloud storage platform for file sharing       |
| Plex Media Server | A media server that allows you to stream movies, TV shows, and more      |
| Home Assistant    | An open-source home automation platform for controlling smart devices    |
| GitLab            | A web-based Git repository manager for hosting and managing code         |
| Transmission      | An open-source BitTorrent client for downloading and sharing files       |
| OpenVPN           | An open-source virtual private network (VPN) for secure connections      |
| Pi-hole           | A network-level ad blocker that blocks ads and tracking at the DNS level |
