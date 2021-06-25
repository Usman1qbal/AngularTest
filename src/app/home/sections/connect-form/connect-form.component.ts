import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connect-form',
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.css'],
})
export class ConnectFormComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
