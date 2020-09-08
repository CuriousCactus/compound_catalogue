"""compound_catalogue URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings  # Not the best way to do this
from django.conf.urls.static import static  # Not the best way to do this
from django.contrib import admin
from django.urls import include
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import RedirectView
from graphene_django.views import GraphQLView
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('catalogue/', include('compound_catalogue_app.urls')),
    path('', RedirectView.as_view(url='catalogue/')),
    path('graphql/', GraphQLView.as_view(graphiql=True)),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True)))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)  # Not the best way to do this