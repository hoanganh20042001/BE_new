FROM node:14.19.1 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm i -g @nestjs/cli

# RUN chown -R root:root /usr/src/vnu_backend
#COPY . .

# RUN npm run build
ENV NODE_OPTIONS="--max-old-space-size=4096"

#FROM node:14.19.1 as runner
#WORKDIR /app
#COPY --from=builder /app/dist ./dist
#COPY . .
#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/package.json ./package.json
#COPY --from=builder /app/package-lock.json ./package-lock.json
EXPOSE 8080

# Run the application in development mode
CMD ["npm", "run", "start:dev"]
