from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=200)
    is_done = models.BooleanField(default=False)
    created_at = models.DateField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='todos')
