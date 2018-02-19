sudo npm install
sudo ng build --prod --build-optimizer
ssh ubuntu@codefoster.club <<EOF
  cd /var/www/codefoster
  rm -rf public
  exit
EOF
scp -rp ./dist ubuntu@codeofster.club:/var/www/codefoster/public
