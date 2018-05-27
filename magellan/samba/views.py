from rest_framework import viewsets
from .serializers import ConfigurationSerializer, ShareSerializer
from .models import Configuration, Share


class ConfigurationViewSet(viewsets.ModelViewSet):
    http_method_names = ['head', 'get', 'put']
    queryset = Configuration.objects.all()
    serializer_class = ConfigurationSerializer
    filter_fields = '__all__'


class ShareViewSet(viewsets.ModelViewSet):
    queryset = Share.objects.all()
    serializer_class = ShareSerializer
    filter_fields = '__all__'
