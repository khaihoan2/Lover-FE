import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user/user.service';
import {USER_API_URL} from '../../api-urls';

@Component({
  selector: 'app-gallery-model',
  templateUrl: './gallery-model.component.html',
  styleUrls: ['./gallery-model.component.css']
})
export class GalleryModelComponent implements OnInit {

  apiUrlPage = `${USER_API_URL}/gallery?page=`

  username: string;
  firstName: string;
  viewCounterMin: string;
  viewCounterMax: string;
  users: User[] = [];

  totalElementDescJoinedAt = 0;

  totalPage: number[] = [];

  currentPage = 0;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.findUserByDescJoinedAt(0);
    this.getTotalElementDescJoined();
  }

  findUserByDescJoinedAt(page: number) {
    this.userService.findUserByDescJoinedAt(page).subscribe(data => {
      this.users = data;
    }, error => console.log(error.message));
  }

  getTotalElementDescJoined() {
    this.userService.getTotalElementDescJoinedAt().subscribe(data => {
      this.totalElementDescJoinedAt = data;
      this.getTotalPage();
    })
  }

  private getTotalPage() {
    let checkPageNumber = this.totalElementDescJoinedAt % 12;
    if (checkPageNumber == 0) {
      let pages = this.totalElementDescJoinedAt / 12;
      for (let i = 0; i < pages; i++) {
        this.totalPage.push(i);
      }
    } else {
      let pages = (this.totalElementDescJoinedAt - this.totalElementDescJoinedAt % 12) / 12 + 1;
      for (let i = 0; i < pages; i++) {
        this.totalPage.push(i);
      }
    }
  }

  changePage(page: number) {
    if (page < 0) {
      return;
    }
    if (page > this.totalPage.length - 1) {
      return;
    }
    this.currentPage = page;
    this.findUserByDescJoinedAt(this.currentPage);
  }

  submit() {
    if (this.username == undefined) {
      this.username = '';
    }
    if (this.firstName == undefined) {
      this.firstName = '';
    }
    if (this.viewCounterMin == undefined) {
      this.viewCounterMin = '';
    }
    if (this.viewCounterMax == undefined) {
      this.viewCounterMax = '';
    }
    this.userService.findByUserFull(this.username, this.firstName, this.viewCounterMin, this.viewCounterMax, 0).subscribe((data: any) => {
      this.users = data.content;
      // this.totalElementDescJoinedAt = data.total_pages;
      // this.currentPage = data.page;
    }, error => alert(error));
  }

}
