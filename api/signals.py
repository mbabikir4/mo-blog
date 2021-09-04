from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

from .models import CustomUser, FileUploadJodit
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
import os

@receiver(post_save, sender=CustomUser)
def create_static_user(sender, instance, created, **kwargs):
    if created:
        path = os.path.join(BASE_DIR, 'assets')
        path_to_user = os.path.join(path, instance.username)
        os.mkdir(path_to_user)


