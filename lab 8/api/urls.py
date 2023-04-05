from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.all_products), #List of all Products
    path('products/<int:id>/', views.one_product), #Get one Product
    path('categories/', views.all_categories), #List of all Categories
    path('categories/<int:id>/', views.one_category), #Get one Category
    path('categories/<int:id>/products/', views.products_by_category) #List of Products by Category
]