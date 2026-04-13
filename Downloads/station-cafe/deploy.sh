#!/bin/bash
git add .
git commit -m "deploy update"
git push
vercel --prod --name deploymh
