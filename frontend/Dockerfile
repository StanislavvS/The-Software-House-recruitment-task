FROM node:14.18-slim


WORKDIR /frontend

COPY package-lock.json /frontend/
COPY package.json /frontend/

RUN npm install

CMD ["npm", "start"]
