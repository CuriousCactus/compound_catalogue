import graphene
from graphene import ObjectType, String, Field
from graphene_django import DjangoObjectType
from compound_catalogue_app.models import Compound, AssayResult
from graphene_django.filter import DjangoFilterConnectionField

class CompoundsType(DjangoObjectType):
    class Meta:
        model = Compound
        fields = "__all__"

class AssayResultsType(DjangoObjectType):
    class Meta:
        model = AssayResult
        fields = "__all__"

class Header(graphene.ObjectType):
    name = graphene.String()
    verbose_name = graphene.String()

class Query(ObjectType):
    compounds = graphene.List(CompoundsType)
    headers = graphene.List(Header)
    assay_result = graphene.Field(AssayResultsType)
    assay_results = graphene.List(AssayResultsType, compound_id=graphene.ID(), result=graphene.String())

    def resolve_assay_result(self, info, id):
        return AssayResult.objects.get(pk=id)

    def resolve_assay_results(self, info, compound_id = None, result = None, **kwargs):
        if compound_id:
            return AssayResult.objects.filter(compound_id=compound_id)
        if result:
            return AssayResult.objects.filter(result=result)
        else:
            return AssayResult.objects.all()

    def resolve_compounds(self, info):
        return Compound.objects.all()

    # def resolve_assay_results(self, info):
    #     return AssayResult.objects.all()

    def resolve_headers(self, info):
        fields = Compound._meta.get_fields()
        list = []
        for field in fields:
            if hasattr(field, 'verbose_name'):
                header = Header(field.name, field.verbose_name)
                list.append(header)
        return list

schema = graphene.Schema(query=Query, auto_camelcase=False)

# query {
#   assay_results(compound_id: "1175669") {
#     id
#     result
#     compound {
#       id
#     }
#   }
# }
