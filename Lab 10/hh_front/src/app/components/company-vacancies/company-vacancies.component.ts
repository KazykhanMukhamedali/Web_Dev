import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Vacancy, Company } from '../../models';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-company-vacancies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  company: Company | null = null;
  loading = true;
  error: string | null = null;
  companyId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.error = null;

    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (!id) {
          this.error = 'Company ID not found in route.';
          this.loading = false;
          return of(null);
        }
        this.companyId = +id;
        return this.apiService.getCompanyVacancies(this.companyId);
      })
    ).subscribe({
        next: (vacanciesData) => {
          if (!vacanciesData) return;
          this.vacancies = vacanciesData;
          if (this.vacancies.length > 0 && this.vacancies[0].company) {
               this.company = this.vacancies[0].company;
          } else if (this.companyId) {
               this.apiService.getCompany(this.companyId).subscribe(comp => this.company = comp);
          }
          this.loading = false;
        },
        error: (err) => {
          console.error(`Error fetching data for company ${this.companyId}:`, err);
          if (err.status === 404) {
               this.error = `Company with ID ${this.companyId} not found.`;
          } else {
               this.error = 'Failed to load vacancies.';
          }
          this.loading = false;
        }
    });
  }
}