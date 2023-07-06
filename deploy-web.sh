cd sharepad3-model
npm run build

cd ../sharepad3-web
npm run build

cp -R ./dist/* /var/www/html
