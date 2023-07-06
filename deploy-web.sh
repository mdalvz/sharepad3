cd sharepad3-model
npm install
npm run build

cd ../sharepad3-web
npm install
npm run build

cp -R ./dist/* /var/www/html
