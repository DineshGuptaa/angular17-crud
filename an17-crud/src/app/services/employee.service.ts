import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IEmployee } from '../pages/shared/models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiurl = 'http://localhost:8085/api/employee';
  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<ApiResponse<IEmployee[]>> {
    return this.http.get<ApiResponse<IEmployee[]>>(`${this.apiurl}`);
  }

  getEmployee(id: string): Observable<ApiResponse<IEmployee>> {
    return this.http.get<ApiResponse<IEmployee>>(`${this.apiurl}/${id}`);
  }

  createEmployee(employee: IEmployee): Observable<any> {
    return this.http.post(`${this.apiurl}/add`, employee);
  }

  updateEmployee(id: number, employee: IEmployee): Observable<any> {
    return this.http.put(`${this.apiurl}/update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiurl}/delete/${id}`);
  }
}
