from django.contrib import admin
from django.contrib.admin.decorators import register
from django.contrib import  admin

# Register your models here.

from . import models

admin.site.register(models.DataForm)

admin.site.register(models.Blog)
admin.site.register(models.FileUpload)
admin.site.register(models.FileUploadJodit)