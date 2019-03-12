import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ServiceService } from 'src/app/services/service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      0,
      '',
      '',
      formValue['email'],
      formValue['password']
      , '', 0, '', 1, '',
    );
    this.authService.createNewUser(newUser);
    // this.router.navigate(['/users']);
  }

  ngOnInit() {
    this.initForm();
  }

}
