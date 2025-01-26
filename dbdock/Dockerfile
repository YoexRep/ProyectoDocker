# Usar la imagen oficial de PostgreSQL como base
FROM postgres:latest

# Copiar el script SQL al directorio de inicialización de PostgreSQL
COPY init.sql /docker-entrypoint-initdb.d/

# Los scripts en /docker-entrypoint-initdb.d/ se ejecutan automáticamente al iniciar el contenedor