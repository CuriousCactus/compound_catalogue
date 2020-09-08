from django.contrib import admin

# Register your models here.

from .models import Compound, AssayResult

#admin.site.register(Compound)
#admin.site.register(AssayResult)

# Define the admin class
class CompoundAdmin(admin.ModelAdmin):
    list_display = ('compound_id', 'molecular_formula', 'molecular_weight')

# Register the admin class with the associated model
admin.site.register(Compound, CompoundAdmin)

# Define the admin class
class AssayResultAdmin(admin.ModelAdmin):
    list_display = ('result_id', 'compound', 'target', 'result', 'operator', 'value', 'unit')

# Register the admin class with the associated model
admin.site.register(AssayResult, AssayResultAdmin)