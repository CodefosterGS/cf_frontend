ssh -tt ubuntu@codefoster.club <<EOF
cd ~
rm -rf cf_frontend
git clone https://github.com/CodefosterGS/cf_frontend.git
cd ./cf_frontend
npm cache verify 
npm install
ng build --prod --build-optimizer
rm -rf /var/www/codefoster/public
cd ./dist
cp -r . /var/www/codefoster/public
exit
EOF
