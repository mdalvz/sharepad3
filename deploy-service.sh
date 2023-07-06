cd sharepad3-model
npm install
npm run build

cd ../sharepad3-service
npm install
npm run build

forever stopall
PORT=8080 forever ./lib/index.js
