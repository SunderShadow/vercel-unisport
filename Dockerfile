FROM node:25-alpine

RUN npm install -g pnpm

COPY ./ /home/node/app
WORKDIR /home/node/app

EXPOSE ${PORT}

RUN pnpm run build
CMD ["sh", "./start-container.sh"]
