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
  username: string;
  firstName: string;
  viewCounter: string;
  status: any = null;
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
  submid() {
    this.userService.findByUserFull(this.username, this.firstName, this.viewCounter, this.status, 0).subscribe((data: any) => {
      this.users = data.content;
    }, error => alert(error));
  }

}
