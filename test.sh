sudo echo "call Test.sh"
sudo apt update
sudo apt install snapd # The d is not a typo!
sudo apt update
sudo apt install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
sudo systemctl status ssh
sudo snap install ngrok
ngrok authtoken 24sNRh34iiPCmr5sAqaxVKtFWWe_3M1uVeyJ2RVhqRWX8G6o2
sudo ufw allow ssh
sudo ufw allow ftp
sudo ufw allow http
sudo ufw enable
sudo ufw status
sudo  useradd test123 && printf "yourpassword\nyourpassword\n" |  sudo passwd test123
