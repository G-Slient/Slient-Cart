#Slient Cart

```
MEAN STACK APPLICATION (MongoDB,Expess.j,Angular,Node.js)
```
## Installation

### Installation of NVM

1. First download the NVM installation script using cURL as follows

        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

2. After downloading the script, run the script using bash as follows

        bash install_nvm.sh
    
3. To reflect the changes for the current user session, use following command

        source ~/.profile
    
4. Check installed NVM version as follows

        nvm --version
    
5. Install a particular version of node

        nvm install 10.15

### Install Mongodb

Mongodb can be install by following the steps from this [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) or follow the below steps. 

1. Import the public key used by the package management system.

        wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

2. Create a list file for MongoDB

        echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

3.  Reload local package database

        sudo apt-get update

4.  Install the MongoDB packages

        sudo apt-get install -y mongodb-org

5.  Start MongoDB

        sudo service mongod start

### Install Angular CLI via npm

1. Install the angularcli

        npm install -g @angular/cli

### Run the Application 

1. Remove the package-lock.json

        rm package-lock.json

2. Install the dependencies

        npm install

3. Build the angular project 

        ng build 

4. Run the server 

        node server.js 

```
    Application will be running at http://localhost:3000 
```

