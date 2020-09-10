# Prerequisites

- Python 3
- pip3
- Node 14
- Yarn

# Installation

## Django

- Move to the 'backend' folder

- Enter the python vm:

  `workon django_test`

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

- Create a user so you can view the backend:

  `python3 manage.py createsuperuser`

## React

- Move to the 'frontend' folder

- Install dependencies:

  `yarn install`

- Copy the 'images' from the provided zip file folder into 'frontend/src'

- Start the server:

  `yarn start`

# Development

- Create list of installed packages:

  `pip3 freeze > requirements.txt`

# Sources

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website
- https://medium.com/@zoejoyuliao/django-graphql-react-1-integrate-graphql-into-your-django-project-ff51237bb5d9
- https://medium.com/@zoejoyuliao/django-graphql-react-2-integrate-graphql-into-your-react-project-71fa74f1cb00
- https://material-ui.com/components/tables/

# Questions

- Which is the best drug for my protein?
- Can I see if there are any predictors for binding?
- Calculate more properties of molecules? H bond donors?
- For larger datasets, should sorting and pagination be done in the backend?

# Tasks

- Get assay data from backend
- Show assay data in dropdown in table
- IDs are duplicated (id is strings, compound_id is integers)
- Decide if cells should be displayed programmatically or written out by hand
- Order of columns could come from query, or a column order array in table.js
- Make it look prettier
- Linting
- Compiled css
- Document installation!
- Bigger font size
- Header should be sticky
- Generate images
