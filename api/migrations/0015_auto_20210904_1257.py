# Generated by Django 3.2.4 on 2021-09-04 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_blog_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileuploadjodit',
            name='error',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='fileuploadjodit',
            name='msg',
            field=models.CharField(default='File Uploaded', max_length=50),
        ),
    ]
