#Docker file para la creación de la imagen de la API

FROM node:18
WORKDIR /app
COPY package*.json ./

# Instala devDependencies (incluyendo nodemon)
RUN npm install --include=dev 
COPY . .
EXPOSE 4000
# Usa nodemon desde node_modules
CMD ["npx", "nodemon", "src/index.js"]  