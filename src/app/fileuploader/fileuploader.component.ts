import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  uploadFile(event){
    console.log('1');
    let elem = event.target;
    if(elem.files.length>0){
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file', elem.files[0]);

      this.http.post('http://localhost/angular-php/script.php', formData).subscribe((data) => {
        console.log('Got some data from backend ', data);
      }, (error) => {
        console.log('Error ', error);
      })
    }
  }
}
