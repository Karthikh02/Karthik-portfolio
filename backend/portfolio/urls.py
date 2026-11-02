from django.urls import path
from . import views

urlpatterns=[
    path('contact_message/',views.create_contact,name='create_Contact'),
    path('admin_login/',views.admin_login, name='admin_login'),
]