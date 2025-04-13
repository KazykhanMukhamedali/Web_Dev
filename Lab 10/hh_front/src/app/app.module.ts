import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Если компоненты НЕ standalone, импортируй и добавь их в declarations:
// import { CompanyListComponent } from './components/company-list/company-list.component';
// import { CompanyVacanciesComponent } from './components/company-vacancies/company-vacancies.component';


@NgModule({
  declarations: [
    AppComponent
    // CompanyListComponent, // <-- если не standalone
    // CompanyVacanciesComponent // <-- если не standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }