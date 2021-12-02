import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  })

  user: User = {};

  checkUsername: boolean = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.user = this.userForm.value;
    this.userService.register(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/auth/login'])
    }, error => error.message);
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  get email() {
    return this.userForm.get('email');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  checkUsernameDuplicate(event) {
    let username = event.target.value;
    this.userService.findByUsername(username).subscribe(() => {
      this.checkUsername = false;
    }, () => {
      this.checkUsername = true;
    })
  }
}
