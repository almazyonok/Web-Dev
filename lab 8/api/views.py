from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category

def all_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def one_product(request, id):
    try:
        product = Product.objects.get(id = id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': 'product not found'}, status = 400)
    return JsonResponse(product.to_json())

def all_categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def one_category(request, id):
    try:
        category = Category.objects.get(id = id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': 'category not found'}, status = 400)
    return JsonResponse(category.to_json())

def products_by_category(request, id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category = category.name)
    products_by_category_json = [p.to_json() for p in products]
    return JsonResponse(products_by_category_json, safe=False)