FROM node

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]