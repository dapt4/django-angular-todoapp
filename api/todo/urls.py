from django.urls import path
from . import views

urlpatterns = [
    path('todo', views.list_create),
    path('login', views.login),
    path('register', views.register),
    path('status/<int:id>', views.change_status),
    path('todo/<int:id>', views.edit_delete),
]

