cd sharepad3-model
npm install
npm run build

cd ../sharepad3-service
npm install
npm run build

sudo forever stopall
sudo PORT=8080 forever node ./lib/index.js
