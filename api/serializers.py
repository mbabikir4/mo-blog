
from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.models import TokenModel


from . import models
class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length=20)
    last_name = serializers.CharField( max_length=30)
    nation = serializers.CharField(max_length=20)
    date_of_b = serializers.CharField(max_length=20)

    def save(self, request):
        user = super().save(request)
        user.first_name = self.data.get('first_name')
        user.last_name = self.data.get('last_name')
        user.nation = self.data.get('nation')
        user.date_of_b = self.data.get('date_of_b')

        user.save()
        return user
    
class DataFormSerializer(ModelSerializer):
    class Meta:
        model = models.DataForm
        fields= '__all__'

class BlogSerializer(ModelSerializer):
    class Meta:
        model = models.Blog
        fields = '__all__'


class FileSerializer(ModelSerializer):
    class Meta:
        model =  models.FileUpload
        fields = '__all__'
        
class FileJoditSerializer(ModelSerializer):
    
    class Meta:
        model =  models.FileUploadJodit
        fields = '__all__'





class TokenSerializer(ModelSerializer):
    token = serializers.SerializerMethodField('get_token')
    """
    Serializer for Token model.
    """

    class Meta:
        model = TokenModel
        fields = ['token']
    def get_token(self, obj):
        return obj.key


