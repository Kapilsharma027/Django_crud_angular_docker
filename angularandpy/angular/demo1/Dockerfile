FROM node:12.7-alpine as node
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .


ARG NG_ENV=production
RUN npm run ng build --configuration=$NG_ENV

# RUN npm run ng build --configuration=$NG_ENV

# ENTRYPOINT [ "ng","serve"]  
# stage 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/jokes /usr/share/nginx/html
# CMD [ "npm", "start" ]
