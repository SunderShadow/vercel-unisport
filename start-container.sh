#! /usr/bin/sh

source .env

if $MODE -eq "production"; then
  node --env-file=.env build
else
  pnpm run dev --host --port $PORT
fi