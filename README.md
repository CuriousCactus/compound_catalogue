# Prerequisites

- Vagrant
- VirtualBox

# Installation

- Download the Oracle DB installation zip file (LINUX.X64_193000_db_home.zip) from
http://www.oracle.com/technetwork/database/enterprise-edition/downloads/index.html (you will need to make an account, but it is free)
- Copy this zip file into the project root folder
- Run `vagrant up`


GuestAdditions versions on your host (6.1.10) and guest (6.1.6) do not match.








# Django

workon django_test
python3 manage.py runserver

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py import_json compounds.json

python3 manage.py createsuperuser



# pip

pip freeze > requirements.txt

and whenever you want to install the packages from same file use:

pip install -r requirements.txt


