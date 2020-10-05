FROM node:12

WORKDIR /usr/src/tlapi

COPY package*.json ./
RUN npm cache verify
RUN npm cache clean --force
RUN npm install

# Bundle tlapi source
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
