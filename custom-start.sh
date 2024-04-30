# change dirctory to /api and run development server : GraphQL B.E
cd api
npm run dev&

# change notedly directory and run development server : vite React F.E
cd ../notedly
npm run start&

# tunneling two port : B.E and F.E port
cd ..
ngrok start --config=./ngrok.yml --all
