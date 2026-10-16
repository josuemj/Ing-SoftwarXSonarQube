FROM node:22-alpine

# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
# Install exactly what the lockfile pins, without dev dependencies
RUN npm ci --omit=dev
# Bundle app source: solo los módulos .js del servidor (sin .env, llaves ni tests)
COPY --chown=node:node *.js ./
# Uploads directory must be writable by the unprivileged user
RUN mkdir -p /app/uploads && chown node:node /app/uploads
# Run as the non-root user shipped with the node image
USER node
# Expose port 3000
EXPOSE  3000

CMD ["npm", "start"]
