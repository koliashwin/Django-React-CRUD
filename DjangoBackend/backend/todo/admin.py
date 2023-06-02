from django.contrib import admin
from .models import *

# Register your models here.
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'cost', 'rating')

admin.site.register(Todo, TodoAdmin)
admin.site.register(Product, ProductAdmin)