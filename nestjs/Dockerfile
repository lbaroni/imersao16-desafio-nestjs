FROM node:20-slim

RUN apt update && apt install -y openssl procps

WORKDIR /home/node/app

USER node

#CMD [ "tail", "-f", "/dev/null" ]
CMD [ "/home/node/app/.docker/start.sh" ]
