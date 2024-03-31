set -eux

function scp_portfolio() {
    ssh 10.0.0.105 mkdir -p $(dirname "~/portfolio/$1")
    scp -r "./$1" "10.0.0.105:~/portfolio/$1"
}

ssh 10.0.0.105 rm -rf ~/portfolio/*

scp_portfolio assets/css/style.css
scp_portfolio assets/img
scp_portfolio assets/documents
scp_portfolio app.js
scp_portfolio index.html

ssh -t 10.0.0.105 sudo systemctl restart kassi-portfolio