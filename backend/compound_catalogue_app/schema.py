import graphene
from graphene_django import DjangoObjectType

from compound_catalogue_app.models import Compound

class CompoundType(DjangoObjectType):
    class Meta:
        model = Compound

class Query(graphene.ObjectType):
    compounds = graphene.List(CompoundType)

    def resolve_compounds(self, info):
        return Compound.objects.all()

schema = graphene.Schema(query=Query)
