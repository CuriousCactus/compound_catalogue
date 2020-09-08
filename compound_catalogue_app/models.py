from django.db import models
import json
# Create your models here.

from django.urls import reverse # Used to generate URLs by reversing the URL patterns

class Compound(models.Model):

    compound_id = models.IntegerField()
    smiles = models.TextField(max_length=1000, help_text='Enter the SMILES')
    molecular_weight = models.FloatField()
    ALogP = models.FloatField()
    molecular_formula = models.CharField(max_length=100, help_text='Enter the molecular formula')
    num_rings = models.IntegerField()
    image = models.CharField(max_length=1000, help_text='Enter the image path')
    assay_results = models.TextField(max_length=1000, default='', help_text='Enter the assay results')


    def __str__(self):
        """String for representing the Model object."""
        return str(self.compound_id)

    def get_absolute_url(self):
        """Returns the url to access a detail record for this compound."""
        return reverse('compound-detail', args=[str(self.id)])




class AssayResult(models.Model):

    result_id = models.IntegerField()
    target = models.TextField(max_length=100, help_text='Enter the protein target')
    result = models.CharField(max_length=100, help_text='Enter the type of result')
    operator = models.CharField(max_length=100, help_text='Enter the operator')
    value = models.FloatField()
    unit = models.CharField(max_length=100, help_text='Enter the units of the result')
    compound = models.ForeignKey(Compound, on_delete=models.CASCADE, null=True)

    def __str__(self):
        """String for representing the Model object."""
        return str(self.result_id)

    def get_absolute_url(self):
        """Returns the url to access a detail record for this compound."""
        return reverse('result-detail', args=[str(self.id)])



f = open('compounds.json')
data = json.load(f)
