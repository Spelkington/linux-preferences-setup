# ===== INITIAL SETUP =====

CYAN='\033[0;36m'
NC='\033[0m'

echo "${CYAN}Update application repos${NC}"
sudo apt update

USERDIR=/home/$USER

echo "\n${CYAN}Creating temp setup directory in home${NC}"
mkdir $USERDIR/setup

echo "\n${CYAN}Creating Repositories directory in home${NC}"
mkdir $USERDIR/Repositories

SETUP=$USERDIR/setup
REPOS=$USERDIR/Repositories

# ===== SNAP =====
sudo apt install -y snapd

# ===== XCLIP =====
sudo apt install -y xclip

# ===== GIT ======
echo "\n${CYAN}Installing and configuring git${NC}"

# Install
sudo apt install -y git 

# Configure preferences
git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
git config --global user.name "Spencer Elkington"
git config --global user.email "spelkington@gmail.com"

# ===== GIT SSH =====
echo "\n${CYAN}Loading SSH to GitHub${NC}"

if [! -f "$USERDIR/.ssh/id_rsa.pub" ]; then
	echo "\n${CYAN}No SSH key found: generating new${NC}"	
	ssh-keygen -t rsa -b 4096 -C "spelkington@gmail.com"
fi

cat $USERDIR/.ssh/id_rsa.pub | xclip -selection clipboard
echo "\n${CYAN}SSH Public copied to system clipboard${NC}"

echo "\n${CYAN}Opening GitHub SSH entry...${NC}"
xdg-open https://github.com/settings/ssh/new

echo "\n${CYAN}Press ENTER once SSH is entered.${NC}"
read _

# ===== GET CONFIGURATIONS =====
echo "\n${CYAN}Retrieving app configurations from GitHub${NC}"

cd $REPOS
git clone git@github.com:Spelkington/linux-preferences-setup.git

PREFERENCES=$REPOS/linux-preferences-setup
CONFIGS=$PREFERENCES/configs

mkdir $USERDIR/.configs
cp -r $CONFIGS/.configs/ $USERDIR/

# ===== GOOGLE CHROME =====
echo "\n${CYAN}Installing Chrome${NC}"
#UNCOMMENT wget -O $SETUP/google-chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
#UNCOMMENT sudo dpkg -i $SETUP/google-chrome.deb

# ===== ANACONDA/PYTHON =====
echo "\n${CYAN}Installing Anaconda/Python${NC}"
#UNCOMMENT wget -O $SETUP/anaconda.sh https://repo.anaconda.com/archive/Anaconda3-2019.10-Linux-x86_64.sh
#UNCOMMENT sh $SETUP/anaconda.sh

# ===== GESTURES SETUP =====
echo "\n${CYAN}Set up gestures for workspace swiping${NC}"

sudo gpasswd -a $USER input
#UNCOMMENT sudo apt install -y xdotool wmctrl libinput-tools

cd $SETUP
git clone https://github.com/bulletmark/libinput-gestures.git
cd $SETUP/libinput-gestures
#UNCOMMENT sudo make install

#UNCOMMENT libinput-gestures-setup autostart

# ===== GNOME UTLITIES =====
echo "\n${CYAN}Installing Gnome utils${NC}"
#UNCOMMENT sudo apt install -y gnome-screenshot gnome-disk-utility

# ===== VIM =====
echo "\n${CYAN}Installing Vim${NC}"
#UNCOMMENT sudo apt install -y vim

# ===== VSCODE =====
echo "\n${CYAN}Installing VSCode${NC}"
#UNCOMMENT sudo snap install --classic code

# ===== CLEANUP =====
echo "\n${CYAN}Cleaning up...${NC}"
rm -rf $SETUP

echo "\n${CYAN}Done! Log out of $USER to complete setup.${NC}"
