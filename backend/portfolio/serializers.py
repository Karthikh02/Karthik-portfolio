from rest_framework import serializers
from . models import ContactMessage

class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields ='__all__'

