# Generated by Django 3.2.4 on 2021-09-04 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_alter_fileuploadjodit_baseurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fileuploadjodit',
            name='baseurl',
            field=models.CharField(default='http://localhost:8000/<function user_path_j at 0x0000025A1516FD30>', max_length=50),
        ),
    ]
