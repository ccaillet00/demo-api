# Base Image with Bun pre-installed

FROM oven/bun:latest

# Set the working directory 
WORKDIR /app

# Copy the Source Code
COPY . /app/

# Install dependencies
RUN bun install

# push the database schema to the database
RUN bunx drizzle-kit push 

# Start the Application
CMD ["bun", "run", "start"]