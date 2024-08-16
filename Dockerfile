#build client
#build api
#copy to runtime

FROM node:18-bullseye-slim AS build-web

WORKDIR /client

RUN apt update 

COPY . .

RUN yes | npm install

RUN npm run build


FROM nginx AS host

COPY --from=build-web /client/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# change this entrypoint if it is not the same as the repo
ENTRYPOINT ["nginx","-g", "daemon off;"]
