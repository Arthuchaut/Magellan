from rest_framework import serializers
from .models import Restriction, Server

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ('host', 'enabled')
