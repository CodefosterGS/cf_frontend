ssh -tt ubuntu@codefoster.club <<EOF
cd ~
git clone https://github.com/CodefosterGS/cf_frontend.git
cd ./cf_frontend
npm cache clean 
npm install
ng build --prod --build-optimizer
rm -rf /var/www/codefoster/public
cd ./dist
cp -r . /var/www/codefoster/public
exit
EOF
