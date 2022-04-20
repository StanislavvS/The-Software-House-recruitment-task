FROM node:14.18-alpine


WORKDIR /frontend

COPY package-lock.json /frontend/
COPY package.json /frontend/

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install

CMD ["npm", "start"]
