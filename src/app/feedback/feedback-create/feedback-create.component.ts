import { Component, OnInit } from '@angular/core';
import {Feedback} from '../../model/feedback';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {FeedbackService} from '../../service/feedback.service';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {
  feedback: Feedback;
  feedbackForm: FormGroup = new FormGroup({
    content: new FormControl(),
    rating: new FormControl(),
    sent_at: new FormControl(),
    }
  );
  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit() {
  }
  createFeedback() {
    const feedback = this.feedbackForm.value;
    // feedback.country = {
    //   id: feedback.country
    // };
    this.feedbackService.saveFeedback(feedback).subscribe(() =>  {
      this.router.navigateByUrl('/feedback');
      alert('thành công');
    }, error => { alert(error);
    });
  }

}
