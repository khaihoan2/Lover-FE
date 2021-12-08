import {Component, OnInit} from '@angular/core';
import {Feedback} from '../../model/feedback';
import {FeedbackService} from '../../service/feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.feedbackService.getAllFeedback().subscribe(data => {
        this.feedbacks = data;
      }, error => {
        alert(error);
      }
    );
  }
}
