from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def all_companies(request):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        company = Company.objects.create(name=data.get('name'), description=data.get('description'),
                                         city=data.get('city'), address=data.get('address'))
        return JsonResponse(company.to_json())


@csrf_exempt
def one_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'message': "Company with such an id doesn't exist"}, status=404)
    if request.method == "GET":
        return JsonResponse(company.to_json())
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.name = data.get('name')
        company.description = data.get('description')
        company.city = data.get('city')
        company.address = data.get('address')
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def vacancies_by_company(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancies.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist:
        return JsonResponse({'message': "Company with such an id doesn't exist"}, status=404)
    if request.method == "GET":
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(name=data.get('name'), description=data.get('description'),
                                         salary=data.get('salary'), company=company)
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def all_vacancies(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        try:
            company = Company.objects.get(id=data.get("company"))
        except Company.DoesNotExist:
            return JsonResponse({'message': "Company with such an id doesn't exist"}, status=400)
        vacancy = Vacancy.objects.create(name=data.get('name'), description=data.get('description'),
                                         salary=data.get('salary'), company=company)
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def one_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'message': "Vacancy with such an id doesn't exist"}, status=404)
    if request.method == "GET":
        return JsonResponse(vacancy.to_json())
    elif request.method == "PUT":
        data = json.loads(request.body)
        try:
            company = Company.objects.get(id=data.get("company"))
        except Company.DoesNotExist:
            return JsonResponse({'message': "Company with such an id doesn't exist"}, status=400)
        vacancy.name = data.get('name')
        vacancy.description = data.get('description')
        vacancy.salary = data.get('salary')
        vacancy.company = company
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({'deleted': True})


def top_ten(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)