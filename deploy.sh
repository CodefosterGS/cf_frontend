ssh -tt ubuntu@codefoster.club <<EOF
cd cf_frontend
git pull
npm install
ng build --prod --build-optimizer
rm -rf /var/www/codefoster/public
cd ./dist
cp -r . /var/www/codefoster/public
exit
EOF
