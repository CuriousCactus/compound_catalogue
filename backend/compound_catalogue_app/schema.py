from graphene import ObjectType, ID, String, List, Field, Schema
from graphene_django import DjangoObjectType
from compound_catalogue_app.models import Compound, AssayResult

class CompoundsType(DjangoObjectType):
    class Meta:
        model = Compound
        fields = "__all__"

class AssayResultsType(DjangoObjectType):
    class Meta:
        model = AssayResult
        fields = "__all__"

class Header(ObjectType):
    name = String()
    verbose_name = String()

class Query(ObjectType):
    compounds = List(CompoundsType)
    headers = List(Header)
    assay_results = List(AssayResultsType, compound_id=ID(), target=String(), result=String())

    def resolve_compounds(self, info, **args):
        return Compound.objects.filter(**args)

    def resolve_assay_results(self, info, **args):
        return AssayResult.objects.filter(**args)

    def resolve_headers(self, info):
        fields = Compound._meta.get_fields()
        list = []
        for field in fields:
            if hasattr(field, 'verbose_name'):
                header = Header(field.name, field.verbose_name)
                list.append(header)
        return list

schema = Schema(query=Query, auto_camelcase=False)
