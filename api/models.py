from .multiple import ArrayFileField
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField

import requests
# Create your models here.
import uuid




class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField( max_length=30)
    nation = models.CharField(max_length=20)
    date_of_b = models.CharField(max_length=20)

    


    

class DataForm(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    GPA = models.DecimalField(decimal_places=3, max_digits=5)
    GraduatedTop = models.BooleanField()
    School = models.CharField(max_length=30)
    def __str__(self):
        return self.uuid


def user_path(instance, filename):
    username = instance.username
    path = '{}/{}'.format(username,filename)
    return path

def user_path_j(instance):
    username = instance.username
    path = '{}'.format(username)
    return path


class Blog(models.Model):
    title = models.CharField(max_length=200)
    innerText = models.TextField()
    created_by = models.CharField(max_length=35, null=True)
    username = models.ForeignKey(CustomUser, null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    image_new = models.ImageField(null=True, upload_to=user_path) 
    description = models.TextField(default='A blog at moh');


    


    def __str__(self):
        return self.title
    

class FileUpload(models.Model):
    username = models.ForeignKey(CustomUser, null=True, on_delete=models.SET_NULL)
    image_new = models.FileField(upload_to=user_path)

    def __str__(self):
        return '{}'.format(self.id)
    

class FileUploadJodit(models.Model):
    username = models.ForeignKey(CustomUser, null=True, on_delete=models.SET_NULL)
    files = ArrayFileField(models.FileField(), null=True, size=8)
    msg = models.CharField(default='File Uploaded', max_length=50)
    baseurl = models.CharField(default='http://localhost:8000', max_length=50)
    error = models.IntegerField(default=0)

    def __str__(self):
        return '{}'.format(self.id)
    