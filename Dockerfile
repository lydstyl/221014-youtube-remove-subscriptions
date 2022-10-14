FROM node:lts-alpine
COPY . ./app
WORKDIR /app/dist
CMD node index.js
# CMD node ./dist/index.js


# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 5000
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]
