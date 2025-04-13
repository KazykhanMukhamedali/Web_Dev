from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list_fbv, name='company-list'),
    path('companies/<int:pk>/', views.CompanyDetailAV.as_view(), name='company-detail'),
    path('vacancies/', views.VacancyListCreateAV.as_view(), name='vacancy-list-create'),
    path('vacancies/<int:pk>/', views.VacancyDetailAV.as_view(), name='vacancy-detail'),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies_fbv, name='company-vacancies'),
    path('vacancies/top_ten/', views.top_ten_vacancies_fbv, name='top-ten-vacancies'),
]