# ===== INITIAL SETUP =====
mkdir ~/setup
mkdir ~/Repositories

# ===== GIT ======

# Install
sudo apt get git 

# Configure preferences
git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
git config --global user.name "Spencer Elkington"
git config --global user.email "spelkington@gmail.com"


# ===== GET CONFIGURATIONS =====
cd ~/setup
git clone https://github.com/Spelkington/linux-preferences-setup.git

# ===== ANACONDA/PYTHON =====
wget -O ~/setup/anaconda.sh https://repo.anaconda.com/archive/Anaconda3-2019.10-Linux-x86_64.sh
sudo sh ~/setup/anaconda.sh

# ===== GESTURES SETUP =====
sudo gpasswd -a $USER input

sudo apt-get install xdotool wmctrl libinput-tools

cd ~/setup/
git clone https://github.com/bulletmark/libinput-gestures.git
cd ~/setup/libinput-gestures
sudo make install

libinput-gestures-setup autostart

# ===== MISC APPLICATIONS =====


# ===== LOGOUT =====
logout
