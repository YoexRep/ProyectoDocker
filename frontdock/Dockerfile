#docker file para la creación de la imagen del front
# Usa la imagen estándar (no Alpine)
FROM node:18  
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"] 