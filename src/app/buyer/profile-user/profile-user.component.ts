import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {UserToken} from '../../model/user-token';
import {API_URL} from '../../api-urls';
import {User} from '../../model/user';
import {UserService} from '../../service/user/user.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  apiUrl = API_URL;

  userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    avatar: new FormControl(),
    description: new FormControl()
  });

  fileAvatar: any;

  userToken: UserToken = {};

  user: User = {};

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private notificationService: NotificationService,
              private router: Router) { }

  ngOnInit() {
    this.userToken = this.authenticationService.currentUserValue;
    this.findByUser();
  }

  findByUser() {
    this.userService.findById(this.userToken.id).subscribe(data => {
      this.user = data;
      if (this.user.avatar == null) {
        this.user.avatar = 'logo.png';
      }
      this.userForm = new FormGroup({
        firstName: new FormControl(this.user.firstName),
        lastName: new FormControl(this.user.lastName),
        email: new FormControl(this.user.email),
        phone: new FormControl(this.user.phone),
        description: new FormControl(this.user.description)
      });
    }, error => this.router.navigate(['/404']));
  }

  routerLinkCart(id: any) {
    this.router.navigate([`/cart`]);
  }

  editProfile(id: number) {
    const formData = new FormData();
    formData.append('firstName', this.userForm.get('firstName').value);
    formData.append('lastName', this.userForm.get('lastName').value);
    formData.append('email', this.userForm.get('email').value);
    formData.append('phone', this.userForm.get('phone').value);
    formData.append('description', this.userForm.get('description').value);
    if (this.fileAvatar) {
      formData.append('avatar', this.fileAvatar);
    }
    this.userService.edit(formData, id).subscribe(data => {
      this.user = data;
      this.findByUser();
      this.notificationService.notify('success', 'Edit successfully');
    }, error => this.notificationService.notify('error', 'Edit error'));
  }

  onFileImage(event) {
    if (event.target.files.length > 0) {
      this.fileAvatar = event.target.files[0];
    } else {
      this.fileAvatar = null;
    }
  }

  createPendingUser() {
    let user = {
      id: this.userToken.id,
      status: 'Pending'
    }
    this.userService.editStatusUser(user, this.userToken.id).subscribe(data => {
      this.notificationService.notify('success', 'Admin will review your profile');
    }, error => this.notificationService.notify('error', 'Error'));
  }

  routeAdmin() {

  }
}
