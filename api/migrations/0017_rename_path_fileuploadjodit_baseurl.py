# Generated by Django 3.2.4 on 2021-09-04 10:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_fileuploadjodit_path'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fileuploadjodit',
            old_name='path',
            new_name='baseurl',
        ),
    ]
