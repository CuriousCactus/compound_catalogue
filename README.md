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

# Questions

Which is the best drug for my protein?
Can I see if there are any predictors for binding?
Calculate more properties of molecules? H bond donors?
