import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {API_URL} from '../../api-urls';

@Component({
  selector: 'app-top-six-model',
  templateUrl: './top-six-model.component.html',
  styleUrls: ['./top-six-model.component.css']
})
export class TopSixModelComponent implements OnInit {

  users: User[] = [];

  apiUrl = API_URL;

  firstUser: User = {};

  count: number[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findUserHighestRanking();
  }

  findUserHighestRanking() {
    this.userService.findUserHighestRanking().subscribe(data => {
      this.users = data;
    }, error => console.log(error.message));
  }

}
