# Generated by Django 2.2.16 on 2020-09-08 10:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('compound_catalogue_app', '0002_auto_20200908_1113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assayresult',
            name='compound',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='compound_catalogue_app.Compound'),
        ),
    ]
