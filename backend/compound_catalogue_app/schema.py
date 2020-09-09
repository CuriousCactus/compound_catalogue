import graphene
from graphene_django import DjangoObjectType
from compound_catalogue_app.models import Compound
from graphene_django.filter import DjangoFilterConnectionField

class CompoundType(DjangoObjectType):
    class Meta:
        model = Compound
        fields = "__all__"

    headers = graphene.String()

    def resolve_headers(self, info):
        fields = self._meta.get_fields()
        list = []
        for field in fields:
            if hasattr(field, 'verbose_name'):
                list.append(field.verbose_name)
        return list

class Query(graphene.ObjectType):
    compounds = graphene.List(CompoundType)

    def resolve_compounds(self, info):
        return Compound.objects.all()

schema = graphene.Schema(query=Query)
