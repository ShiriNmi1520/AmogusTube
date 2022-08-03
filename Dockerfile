FROM --platform=arm64 node:16.15.1

WORKDIR /app

COPY ./package.json ./
RUN npm i -s
COPY . .
RUN npm run build

EXPOSE 3000

CMD npm start