import graphene
from graphene import ObjectType, String, Field
from graphene_django import DjangoObjectType
from compound_catalogue_app.models import Compound
from graphene_django.filter import DjangoFilterConnectionField

class CompoundsType(DjangoObjectType):
    class Meta:
        model = Compound
        fields = "__all__"

class Header(graphene.ObjectType):
    name = graphene.String()
    verbose_name = graphene.String()

class Query(ObjectType):
    compounds = graphene.List(CompoundsType)
    headers = graphene.List(Header)

    def resolve_compounds(self, info):
        return Compound.objects.all()

    def resolve_headers(self, info):
        fields = Compound._meta.get_fields()
        list = []
        for field in fields:
            if hasattr(field, 'verbose_name'):
                header = Header(field.name, field.verbose_name)
                list.append(header)
        return list

schema = graphene.Schema(query=Query, auto_camelcase=False)
