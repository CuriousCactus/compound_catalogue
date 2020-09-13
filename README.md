# Introduction

This app can be used to display a json file of potential drugs, each of which have associated assay results which indicate whether they bind well to a particular protein target.

Firstly, the json file is loaded into a backend database built with Django using a script. The data are loaded into two tables: Compounds and Assay Results. Each Assay Result is associated with the Compound that was tested.

The data are made available using GraphQL and Graphene, so that queries can be run from the frontend using Apollo Client. Queries can be run on Compounds and Assay Results. Assay results are filterable by compound ID, so you can find all the assays run for a particular compound.

In addition, the Compound field names can be fetched using a query. The properly spaced and capitalised 'verbose names' are then used as table headers in the frontend.

The frontend is a React App which uses Apollo Client to query the backend. It shows a Compound Catalogue which is a list of all the compounds in a table with sortable columns and pagination. Each compound row can be expanded to show the associated assay results.

# Prerequisites

- python3
- pip3
- venv
- sqlite3
- Node (versions 10 and 14 have been confirmed to work)
- Yarn (version 1.21.1 has been confirmed to work)

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

- Import models into database:

  `python manage.py migrate --run-syncdb`

- Import data:

  `python3 manage.py import_json data/compounds.json`

- Create a user so you can view the admin pages:

  `python3 manage.py createsuperuser`

- Start the server:

  `python3 manage.py runserver`

- View the admin pages here:

  http://localhost:8000/admin/

## Frontend

- In a new terminal, move to the 'frontend' folder

  `cd frontend`

- Install dependencies:

  `yarn install`

- Copy the 'images' folder from the provided zip file into 'frontend/src'

- Start the server:

  `yarn start`

- View the app here:

  http://localhost:3000/

# Usage

- Move to the 'backend' folder

  `cd backend`

- Enter the vm:

  `source env/bin/activate`

- Start the server:

  `python3 manage.py runserver`

- Move to the 'frontend' folder in a new terminal

  `cd frontend`

- Move to the 'frontend' folder in a new terminal

  `yarn start`

# Features

- Sort columns by clicking on column headings
- Expand a row to see the assay results for that compound by clicking the arrow on the left
- Change the number of compounds per page and switch pages at the bottom of the table

# Helpful commands

- Import models into database after making changes to them:

  `python3 manage.py makemigrations`
  `python3 manage.py migrate`

- Create list of installed packages:

  `pip3 freeze > requirements.txt`

- Test GraphQL queries here:

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

- Choice switcher/menu
- Pickers for protein and result type
- Switch title
- Sort assay results by value
- Name variables better (tdata vs tableData)
- Table should be filterable
- IDs are duplicated (id is strings, compound_id is integers)
- Linting
- Compiled css
- Generate images
