import { Component, OnInit } from '@angular/core';
import {Feedback} from '../../model/feedback';
import {FeedbackService} from '../../service/feedback.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-feedback-delete',
  templateUrl: './feedback-delete.component.html',
  styleUrls: ['./feedback-delete.component.css']
})
export class FeedbackDeleteComponent implements OnInit {
  feedback: Feedback = {};
  id: number;

  constructor(private feedbackService: FeedbackService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.paramMap.subscribe(paraMap => {
      this.id = +paraMap.get('id');
      this.feedbackService.getByIdFeedback(this.id).subscribe(data => {
        this.feedback = data;
      });
    });
  }

  ngOnInit() {
  }

  delete() {
    this.feedbackService.deleteFeedback(this.id).subscribe(() => {
      this.router.navigateByUrl('/feedback');
    });

  }


}
