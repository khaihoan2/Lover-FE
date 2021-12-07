import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Feedback} from '../../model/feedback';
import {FeedbackService} from '../../service/feedback.service';
import {ActivatedRoute} from '@angular/router';
import {ReservationService} from '../../service/reservation.service';

@Component({
  selector: 'app-feedback-update',
  templateUrl: './feedback-update.component.html',
  styleUrls: ['./feedback-update.component.css']
})
export class FeedbackUpdateComponent implements OnInit {
  feedback: Feedback = {};
  id: number;
  editFeedbackForm: FormGroup = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      rating: new FormControl(),
      sent_at: new FormControl(),
      reservation_id: new FormControl(),
    }
  );

  // tslint:disable-next-line:max-line-length
  constructor(private feedBackService: FeedbackService, private reservationService: ReservationService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.feedBackService.getByIdFeedback(this.id).subscribe(data => {
        this.feedback = data;
        this.editFeedbackForm = new FormGroup({
          id: new FormControl(this.feedback.id),
          content: new FormControl(this.feedback.content),
          rating: new FormControl(this.feedback.rating),
          sent_at: new FormControl(new Date()),
          reservation_id: new FormControl(this.feedback.reservation_id.id),
        });


      });
    });
  }

  ngOnInit() {
    this.getOneReservation();
  }

  private getOneReservation() {
    // this.reservationService.getByIdReservation(this.id).subscribe(data => {
    //   this.feedback = data;
    // }, error => alert(error));
  }

  editFeedBack() {
    const feedback = this.editFeedbackForm.value;
    feedback.reservation_id = {
      id: feedback.reservation_id
    };
    this.feedBackService.editFeedback(this.id, feedback).subscribe(() =>
      alert('thành công'), error => alert('lỗi'));
  }

  get name() {
    return this.editFeedbackForm.get('name');
  }

}
