from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.all_companies),  # List of all Companies
    path('companies/<int:id>/', views.one_company),  # Get one Company
    path('companies/<int:id>/vacancies/', views.vacancies_by_company),  # List of Vacancies by Company
    path('vacancies/', views.all_vacancies),  # List of all Vacancies
    path('vacancies/<int:id>/', views.one_vacancy),  # Get one Vacancy
    path('vacancies/top_ten/', views.top_ten)  # List of top 10 vacancies sorted by decreasing salary
]