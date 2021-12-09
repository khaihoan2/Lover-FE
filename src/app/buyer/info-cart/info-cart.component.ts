import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../service/reservation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Reservation} from '../../model/reservation';
import {ReservationDetailService} from '../../service/reservation-detail.service';
import {ReservationDetail} from '../../model/Reservation-detail';
import {NotificationService} from '../../service/notification/notification.service';
import {Feedback} from '../../model/feedback';
import {FeedbackService} from '../../service/feedback.service';

declare var $: any;

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.css']
})
export class InfoCartComponent implements OnInit {

  reservation: Reservation = {};

  reservationDetails: ReservationDetail[] = [];

  feedback: Feedback = {};

  rating: number = 0;

  constructor(private reservationService: ReservationService,
              private reservationDetailService: ReservationDetailService,
              private feedbackService: FeedbackService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      this.findById(id);
      this.findReservationDetailById(id);
      this.findFeedbackByReservationId(id);
    })
  }

  findById(id: any) {
    this.reservationService.findById(id).subscribe(data => {
      this.reservation = data;
    }, error => console.log(error.message));
  }

  completed(id: any) {
    this.reservationService.accessInputStatus(id).subscribe(data => {
      this.notificationService.notify('success', 'Success');
      this.activatedRoute.paramMap.subscribe(param => {
        let id = param.get('id');
        this.findById(id);
        this.findReservationDetailById(id);
        this.findFeedbackByReservationId(id);
      })
    }, error => this.notificationService.notify('error', 'Error'));
  }

  findReservationDetailById(id: any) {
    this.reservationDetailService.findReservationDetailByReservation(id).subscribe(data => {
      this.reservationDetails = data;
    }, error => console.log(error.message));
  }

  findFeedbackByReservationId(id: any) {
    this.feedbackService.findByReservationId(id).subscribe(data => {
      this.feedback = data;
      let content = '';
      for (let i = 0; i < this.feedback.rating; i++) {
        content += '<span class="col color-main star">\n' +
          '                    <i class="fa fa-star" style="font-size: 40px"></i>\n' +
          '                </span>'
      }
      $('#user-star-feedback').html(content);
    })
  }

  clickStar(star: number) {
    this.rating = star;
    $('.star').html('<i class="fa fa-star-o" style="font-size: 40px"></i>')
    for (let i = 1; i <= star; i++) {
      $(`#star${i}`).html('<i class="fa fa-star" style="font-size: 40px"></i>')
    }
  }

  saveFeedback(id: any) {
    let feedbackContent = $('#feedback-content').val();
    let feedback: Feedback = {
      content: feedbackContent,
      rating: this.rating,
      reservation: {
        id: id
      }
    }
    this.feedbackService.saveFeedback(feedback).subscribe(data => {
      this.notificationService.notify('success', 'Successful feedback');
      this.activatedRoute.paramMap.subscribe(param => {
        let id = param.get('id');
        this.findById(id);
        this.findReservationDetailById(id);
        this.findFeedbackByReservationId(id);
      })
    }, error => this.notificationService.notify('error', 'Error feedback'));
    $('.feedback-card').modal('hide');
  }

}
