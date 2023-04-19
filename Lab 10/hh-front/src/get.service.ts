import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client:HttpClient) {}
  getCompanies():Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`)
  }
  getVacancies(id:number):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`)
  }
  addCompany(company_name:string, company_description:string, company_city:string, company_address:string){
    return this.client.post<Company>(`${this.BASE_URL}/api/companies/`,
      {name:company_name, description:company_description, city:company_city, address:company_address})
  }
  addVacancy(vacancy_name:string, vacancy_description:string, vacancy_salary:number, vacancy_company:number){
    return this.client.post<Vacancy>(`${this.BASE_URL}/api/vacancies/`,
      {name:vacancy_name, description:vacancy_description, salary:vacancy_salary, company:vacancy_company})
  }
  deleteCompany(id:number){
    return this.client.delete<any>(`${this.BASE_URL}/api/companies/${id}/`)
  }
  deleteVacancy(id:number){
    return this.client.delete<any>(`${this.BASE_URL}/api/vacancies/${id}/`)
  }
}