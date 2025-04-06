from django.urls import path
from .views import CompanyList, CompanyDetail, VacancyList, VacancyDetail, VacanciesByCompany, top_ten_vacancies

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:id>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', VacanciesByCompany.as_view(), name='vacancies-by-company'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top-ten/', top_ten_vacancies, name='top-ten-vacancies'),
]