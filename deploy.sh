git clone https://github.com/CodefosterGS/cf_frontend.git
cd cf_frontend
npm install
ng build --prod --build-optimizer
ssh ubuntu@codefoster.club <<EOF
  cd /var/www/codefoster
  rm -rf public
  exit
EOF
scp -rp ./dist ubuntu@codeofster.club:/var/www/codefoster/public
