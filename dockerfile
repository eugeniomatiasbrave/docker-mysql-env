# Usa la imagen base oficial de Node.js versión 18
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Copia todos los archivos del directorio actual al directorio de trabajo del contenedor
COPY . .

# Instala las dependencias definidas en package.json
RUN npm install

# Define el comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]