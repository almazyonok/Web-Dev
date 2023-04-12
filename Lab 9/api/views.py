from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Vacancy, Company

def all_companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def one_company(request, id):
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'company not found'}, status = 400)
    return JsonResponse(company.to_json())

def all_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [c.to_json() for c in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def one_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id = id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': 'vacancy not found'}, status = 400)
    return JsonResponse(vacancy.to_json())

def vacancies_by_company(request, id):
    company = Company.objects.get(id=id)
    vacancies = company.vacancies.all()
    vacancies_by_company_json = [p.to_json() for p in vacancies]
    return JsonResponse(vacancies_by_company_json, safe=False)

def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)