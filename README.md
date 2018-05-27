# Project Magellan
Project Magellan (_temporary name_) is made to make self-hosting more easier and accessible for anybody by purposing alternatives solutions to thoses GAFAM companies.

_Magellan_ can be used at home and at the office for making _DIY NAS server_ or simply for _deploying and administrate some services_ like:
 * Samba server (_file sharing_)
 * DHCP server
 * DNS server (_name server_)
 * NTP server (_time server_)
 * Multimedia server (_minidlna, Plex, Emby, etc..._)
 * OpenVPN server
 * CardDAV/CalDAV server (_contact and calendar server_)
 * Many other services (_by using Docker containers_)

> Magellan are currently in active development. All of theses functionalities are not available or stable. We recommand to not use Magellan in production environment as long as a stable version are not released. However you can contribute to the project for helping us to release more fast new functionalities.


## Installation (development)
> We recommand to use virtualenv if you want to develop functionalities. If you just want to test, please deploy the project with Docker.

Ensure you have _python3, pip_ and _nodejs_ installed on your computer. If you have all elements, you can clone the project:
```
git clone https://github.com/enowaves/magellan.git
```

Now, download _python_ dependencies with ```pip install -r requirements.txt```. If all it's ok, you can browse into ```magellan/frontend``` folder and enter theses commands for downloading _nodejs_ dependencies and building the _frontend_:
```
npm i && npm run build
```

You can now make database migrations by using the command ```./manage.py migrate``` into the folder ```magellan```. When it's done, create the superadmin user by using the command ```./manage.py createsuperuser```.

You can now start the (development) server by using the command ```./manage.py runserver```. If you are working on _frontend_, you can start the _autoreload server_ by using the command ```npm run dev``` inside the folder ```magellan/frontend```.


## Contributions
We have a code of conduct for any contributions. You can read them [here](CONTRIBUTING.md).


## Licenses
_Magellan_ uses essentially _opensources licenses_ and is distribued with _AGPL 3.0_ license available [here](LICENSE).
