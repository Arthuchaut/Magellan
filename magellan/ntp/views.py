from rest_framework import viewsets
from .serializers import ServerSerializer, RestrictionSerializer
from .models import Server, Restriction


class ServersViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer
    filter_fields = '__all__'


class RestrictionsViewSet(viewsets.ModelViewSet):
    queryset = Restriction.objects.all()
    serializer_class = RestrictionSerializer
    filter_fields = '__all__'
