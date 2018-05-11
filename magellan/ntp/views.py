from rest_framework import viewsets, generics
from .serializers import *
from .models import *


class ServersViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer