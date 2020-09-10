# Prerequisites

- Node 14
- Yarn

# Django

- Get ready to import models into database: `python3 manage.py makemigrations`
- Import models into database: `python3 manage.py migrate`
- Start the server: `python3 manage.py runserver`
- Import data: `python3 manage.py import_json data/compounds.json`
- Create a user so you can view the backend: `python3 manage.py createsuperuser`

# pip

- Move to python vm: `workon django_test`
- Create list of installed packages: `pip3 freeze > requirements.txt`
- Install the packages from file: `pip3 install -r requirements.txt`

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
