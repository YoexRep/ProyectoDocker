# Práctica con Docker Y CICD con google Kubernetes Engine

Este proyecto es un boilerplate que utiliza Docker para montar un entorno de desarrollo completo con solo un comando. Está diseñado para facilitar la práctica y el desarrollo de aplicaciones web modernas, incluyendo un frontend, un backend, una base de datos y una herramienta de administración de bases de datos.

## 🚀 Características

- **Frontend**: Next.js
- **Backend**: Node.js
- **Base de Datos**: PostgreSQL
- **Administración de BD**: pgAdmin

## 🛠️ Requisitos Previos

- [Docker](https://www.docker.com/get-started) instalado en tu máquina.
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.

## 🤔 Cómo Empezar

1. Clona el repositorio
2. Copia el archivo .env.example a .env
3. Edita el archivo .env con tus variables de entorno.
4. Verifica el script de la bd, para crear tablas e insertar data
5. Corre el comando: `docker compose up --build`

## 💻 Accede a los servicios:

Frontend (Next.js): http://localhost:3000

Backend (Node.js): http://localhost:4000

pgAdmin: http://localhost:5050

PostgreSQL: Accesible desde pgAdmin o cualquier cliente PostgreSQL.
 
   
