# Generated by Django 3.2.4 on 2021-09-04 07:08

import api.models
import api.multiple
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_fileuploadjodit_files'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fileuploadjodit',
            name='files',
            field=api.multiple.ArrayFileField(base_field=models.FileField(upload_to=api.models.user_path), null=True, size=8),
        ),
    ]
