from django.db import models

# Create your models here.
class Joke(models.Model):
    desc = models.TextField(max_length = 5000, null = False, blank = False)
