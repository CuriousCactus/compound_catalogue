# Prerequisites

- Python 3
- pip3
- venv
- Node 14 (older versions not tested but could also work)
- Yarn

# Installation

- Clone the repo:

  `git clone git@github.com:CuriousCactus/compound_catalogue.git`

- Move into the directory

  `cd compound_catalogue`

## Backend

- Move to the 'backend' folder

  `cd backend`

- Create a python vm:

  `python3 -m venv env`

- Enter the vm:

  `source env/bin/activate`

- Install the packages from the requirements file:

  `pip3 install -r requirements.txt`

- Get ready to import models into database:

  `python3 manage.py makemigrations`

- Import models into database:

  `python3 manage.py migrate`

- Import data:

  `python3 manage.py import_json data/compounds.json`

- Start the server:

  `python3 manage.py runserver`

- Create a user so you can view the admin pages:

  `python3 manage.py createsuperuser`

- View the admin pages here:

  http://localhost:8000/admin/

## Frontend

- Move to the 'frontend' folder

  `cd ../frontend`

- Install dependencies:

  `yarn install`

- Copy the 'images' from the provided zip file folder into 'frontend/src'

- Start the server:

  `yarn start`

- View the app here:

  http://localhost:3000/

# Helpful commands

- Enter the python vm (after creating it during installation):

  `workon compound_catalogue`

- Create list of installed packages:

  `pip3 freeze > requirements.txt`

- You can test GraphQL queries here:

  http://localhost:8000/graphql/

# Sources

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website
- https://medium.com/@zoejoyuliao/django-graphql-react-1-integrate-graphql-into-your-django-project-ff51237bb5d9
- https://medium.com/@zoejoyuliao/django-graphql-react-2-integrate-graphql-into-your-react-project-71fa74f1cb00
- https://material-ui.com/components/tables/

# Questions

- Which is the best drug for my protein?
- Can I see if there are any predictors for binding?
- Can I calculate more properties of molecules, for example H-bond donors, which might be better predictors of binding?
  https://www.rdkit.org/docs/source/rdkit.Chem.Lipinski.html
- For larger datasets, should sorting and pagination be done in the backend?

# Tasks

- IDs are duplicated (id is strings, compound_id is integers)
- Linting
- Compiled css
- Generate images
- Table should be filterable
- Description in readme
