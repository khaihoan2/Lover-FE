import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {UserToken} from '../../model/user-token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  currentUser: UserToken = {};

  constructor(private authenticationService: AuthenticationService,
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

}
