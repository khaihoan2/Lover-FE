import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {UserToken} from '../../model/user-token';
import {Router} from '@angular/router';
import {UserService} from '../../service/user/user.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  currentUser: UserToken = {};

  searchUsername: string = '';

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout().subscribe(() => {
      this.currentUser = null;
      this.router.navigate(['']);
    });
  }

  ngDoCheck(): void {
  }

  findByUsername() {
    $('#search-username').val(this.searchUsername);
  }
}
