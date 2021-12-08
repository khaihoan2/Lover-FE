import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-suitable-proposal',
  templateUrl: './suitable-proposal.component.html',
  styleUrls: ['./suitable-proposal.component.css']
})
export class SuitableProposalComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findUserHighestRanking();
  }

  findUserHighestRanking() {
    this.userService.findUserSuitable().subscribe(data => {
      this.users = data;
    }, error => console.log(error.message));
  }

}
