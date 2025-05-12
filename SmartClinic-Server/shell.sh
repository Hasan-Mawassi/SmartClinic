#!/bin/sh

echo "Installing dependencies..."
npm install

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Running Prisma Sedder..."
npx prisma generate
# npx prisma db seed

echo "Starting server..."
npm run start:prod
