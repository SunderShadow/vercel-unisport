#! /usr/bin/sh

source .env

if $MODE -eq "production"
  then
    node --env-file=.env build
  else
    echo $MODE
    pnpm run dev --port
fi