import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
 
  progress: { percentage: number } = { percentage: 0 };
  constructor(private employeesFormService: EmployeeService) { }

  ngOnInit() {
  }

 selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onCitySelect(event) {
    this.employeesFormService.setField(event.target.value);
}
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.employeesFormService.uploadFile(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }
}
