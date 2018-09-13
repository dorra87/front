import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 serverUrl="//localhost:8080/";  

  constructor(private http: HttpClient) { }
  field: string='';

   uploadFile(file: File): Observable<HttpEvent<{}>> {
    const fileLoaded: FormData = new FormData();
    fileLoaded.append('file', file);
    return this.http.post(this.serverUrl,fileLoaded);
  }

  setField(fieldValue: string){
    this.field=fieldValue;
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.serverUrl,this.field);
  }

}
