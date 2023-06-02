from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    cost = models.DecimalField(max_digits=8, decimal_places=2)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    image = models.ImageField()

    def __str__(self):
        return self.name