import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-top-twelve-eight-female-four-male',
  templateUrl: './top-twelve-eight-female-four-male.component.html',
  styleUrls: ['./top-twelve-eight-female-four-male.component.css']
})
export class TopTwelveEightFemaleFourMaleComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findUserHighestRanking();
  }

  findUserHighestRanking() {
    this.userService.findUserLimitFemaleLimitMale().subscribe(data => {
      this.users = data;
    }, error => console.log(error.message));
  }

}
