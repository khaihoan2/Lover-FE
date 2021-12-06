import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-gallery-model',
  templateUrl: './gallery-model.component.html',
  styleUrls: ['./gallery-model.component.css']
})
export class GalleryModelComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.findUserByJoinedAtDesc(0);
  }

  findUserByJoinedAtDesc(page: number) {
    this.userService.findUserByJoinedAtDesc(page).subscribe(data => {
      this.users = data;
    }, error => console.log(error.message));
  }

}
