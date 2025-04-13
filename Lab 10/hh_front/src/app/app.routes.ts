import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyVacanciesComponent } from './components/company-vacancies/company-vacancies.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent, title: 'Companies' },
  { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent, title: 'Company Vacancies' },
  { path: '**', redirectTo: '/companies' }
];