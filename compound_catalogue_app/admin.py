from django.contrib import admin

# Register your models here.

from .models import Compound, AssayResult

admin.site.register(Compound)
admin.site.register(AssayResult)
