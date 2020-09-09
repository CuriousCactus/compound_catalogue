# Django

workon django_test
python3 manage.py runserver

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py import_json data/compounds.json

python3 manage.py createsuperuser

# pip

pip freeze > requirements.txt

and whenever you want to install the packages from same file use:

pip install -r requirements.txt

# Sources

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website
https://medium.com/@zoejoyuliao/django-graphql-react-1-integrate-graphql-into-your-django-project-ff51237bb5d9
https://medium.com/@zoejoyuliao/django-graphql-react-2-integrate-graphql-into-your-react-project-71fa74f1cb00
https://material-ui.com/components/tables/

https://open-babel.readthedocs.io/en/latest/UseTheLibrary/PythonDoc.html

# Questions

Which is the best drug for my protein?
Can I see if there are any predictors for binding?
Calculate more properties of molecules? H bond donors?
For larger datasets, should sorting and pagination be done in the backend?

# Tasks

Get assay data from backend
Show assay data in dropdown in table
IDs are duplicated (id is strings, compound_id is integers)
Decide if cells should be displayed programmatically or written out by hand
Order of columns could come from query, or a column order array in table.js
Make it look prettier
Linting
Compiled css
Document installation!
