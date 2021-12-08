import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {API_URL} from '../../api-urls';
import { UserService } from 'src/app/service/user/user.service';

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
