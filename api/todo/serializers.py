from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'is_done', 'created_at']

