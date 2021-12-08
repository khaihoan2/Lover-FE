import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {API_URL} from '../../api-urls';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-new-face',
  templateUrl: './new-face.component.html',
  styleUrls: ['./new-face.component.css']
})
export class NewFaceComponent implements OnInit {

  users: User[] = [];

  apiUrl = API_URL;

  firstUser: User = {};

  count: number[] = [];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.findUserByJoinedAtDesc(0);
  }

  findUserByJoinedAtDesc(page: number) {
    this.userService.findUserByDescJoinedAt(page).subscribe(data => {
      this.users = data;
      for (let i = 0; i < this.users.length; i++) {
        this.count.push(i);
      }
    }, error => console.log(error.message));
  }

}
