import json
from django.core.management.base import BaseCommand
from compound_catalogue_app.models import Compound, AssayResult

class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str)

    def handle(self, *args, **options):
        with open(options['json_file']) as f:
            compound_list = json.load(f)

        for compound in compound_list:
            compound['pk'] = compound['compound_id']
            compound_object = Compound.objects.get_or_create(pk=compound['pk'], defaults=compound)

            assay_result_list = compound['assay_results']

            for assay_result in assay_result_list:
                assay_result['pk'] = assay_result['result_id']
                assay_result['compound'] = compound_object[0]
                AssayResult.objects.get_or_create(pk=assay_result['pk'], defaults=assay_result)
