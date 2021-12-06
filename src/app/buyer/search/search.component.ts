import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username: string;
  firstName: string;
  viewCounter: number;
  status: boolean;
  users: User[] = [];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.findUserFull();
  }

  private findUserFull() {
    this.userService.findByUserFull(this.username, this.firstName, this.viewCounter, this.status).subscribe(data => {
      this.users = data;
    }, error => console.error(error));
  }
}
