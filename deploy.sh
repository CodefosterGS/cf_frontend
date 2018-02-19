su ubuntu
ssh ubuntu@codefoster.club <<EOF
  cd ~
  git clone https://github.com/CodefosterGS/cf_frontend.git build
  cd build
  npm install
  ng build --prod --build-optimizer
  rm -rf /var/www/codefoster/public
  mv -r /build/. /var/www/codefoster/public
  exit
EOF
