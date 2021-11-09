FROM node:14

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN yarn install

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

# docker build -f ./Dockerfile -t rebraxin/repo-finder-next . 
# docker push rebraxin/repo-finder-next 