import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {Image} from '../../model/image';
import {ImageService} from '../../service/image.service';
import {API_URL} from '../../api-urls';
import {Service} from '../../model/service';
import {ServiceDetailService} from '../../service/service-detail.service';
import {ServiceDetail} from '../../model/service-detail';
import {Reservation} from '../../model/reservation';
import {AuthenticationService} from '../../service/authentication.service';
import {ReservationService} from '../../service/reservation.service';
import {ReservationDetail} from '../../model/Reservation-detail';

declare var $: any;


@Component({
  selector: 'app-info-seller',
  templateUrl: './info-seller.component.html',
  styleUrls: [
    './info-seller.component.css'
  ]
})
export class InfoSellerComponent implements OnInit{

  user: User = {};

  images: Image[] = [];

  imageFirst: Image = {};

  apiUrl = API_URL;

  time: number = 0;

  services: Service[] = [];

  serviceDetails: ServiceDetail[] = [];

  checkInputService: boolean = false;

  totalMoney = 0;

  reservation: Reservation = {};

  reservationDetails: ReservationDetail[] = [];


  fromTime = '';
  toTime = '';
  inputServiceCheckbox = [];
  inputServiceName = [];

  constructor(private userService: UserService,
              private imageService: ImageService,
              private serviceDetailService: ServiceDetailService,
              private authenticationService: AuthenticationService,
              private activatedRoute: ActivatedRoute,
              private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      this.findById(id);
      this.findImagesByUserId(id);
      this.findServiceDetailByUserId(id);
    })
  }

  findById(id: any) {
    this.userService.findById(id).subscribe(data => {
      this.user = data;
    }, error => console.log(error.message))
  }

  findImagesByUserId(id: any) {
    this.imageService.findImagesByUserId(id).subscribe(data => {
      this.images = data;
      this.imageFirst = this.images.shift();
    }, error => console.log(error));
  }

  findServiceDetailByUserId(id: any) {
    this.serviceDetailService.findAllByUserId(id).subscribe(data => {
      this.serviceDetails = data;
    }, error => console.log(error.message));
  }

  calculatorTotalMoney() {
    this.inputServiceCheckbox = [];
    let checker = this.updateInputService();
    this.checkInputService = !(this.fromTime == '' || this.toTime == '' || checker || this.toTime < this.fromTime);
    if (!this.checkInputService) {
      this.validator(checker);
    } else {
      $('#error-from-time').text('');
      $('#error-to-time').text('');
      $('#checkerInputService').text('');
      $('#error-time').text('');
      this.totalMoney = 0;
      this.calculatorTime();
      if (this.time < 0.5) {
        $('#error-time').text('Total rental time must be more than 30 minutes');
        this.checkInputService = false;
        this.totalMoney = 0;
      } else {
        for (let i = 0; i < this.inputServiceCheckbox.length; i++) {
          if (this.inputServiceCheckbox[i] != undefined && this.inputServiceCheckbox[i] != '' && !isNaN(this.inputServiceCheckbox[i])) {
            this.totalMoney += this.time * this.inputServiceCheckbox[i];
          }
        }
      }
    }
  }

  private calculatorTime() {
    let fromTimeHour = +this.fromTime.slice(0, 2);
    let fromTimeMinute = +this.fromTime.slice(3);
    let toTimeHour = +this.toTime.slice(0, 2);
    let toTimeMinute = +this.toTime.slice(3);
    this.time = ((toTimeHour * 60 + toTimeMinute) - (fromTimeHour * 60 + fromTimeMinute)) / 60;
  }

  private validator(checker) {
    if (this.fromTime == '') {
      $('#error-from-time').text('This field is not to blank');
    } else {
      $('#error-from-time').text('');
    }
    if (this.toTime == '') {
      $('#error-to-time').text('This field is not to blank');
    } else {
      $('#error-to-time').text('');
    }
    if (checker) {
      $('#checkerInputService').text('You need to enter at least one service');
    } else {
      $('#checkerInputService').text('');
    }
    if (this.toTime < this.fromTime) {
      $('#error-time').text('To time must be greater than From time');
    }
    this.totalMoney = 0;
  }

  private isInputChecker() {
    for (let i = 0; i < this.serviceDetails.length; i++) {
      let inputValue = +$(`#service${i}:checked`).val();
      this.inputServiceCheckbox.push(inputValue);
      let serviceName = $('.form-check-label')[i].innerHTML;
      this.inputServiceName.push(serviceName);

    }
    let checker = this.inputServiceCheckbox.every(v => v == undefined || v == '' || isNaN(v));
    return checker;
  }

  saveService() {
    this.inputServiceName = [];
    this.inputServiceCheckbox = [];
    let checker = this.updateInputService();
    this.checkInputService = !(this.fromTime == '' || this.toTime == '' || checker || this.toTime < this.fromTime);
    if (!this.checkInputService) {
      this.validator(checker);
      return;
    }
    this.calculatorTime();
    if (this.time < 0.5) {
      $('#error-time').text('Total rental time must be more than 30 minutes');
      return;
    }
    for (let i = 0; i < this.inputServiceCheckbox.length; i++) {
      if (!isNaN(this.inputServiceCheckbox[i])) {
        this.reservationDetails.push({
          serviceName: this.inputServiceName[i],
          price: this.inputServiceCheckbox[i]
        })
      }
    }
    this.reservation = {
      renter: {id: this.authenticationService.currentUserValue.id},
      rentee: {id: this.user.id},
      startFrom: $('#from-time').val(),
      endAt: $('#to-time').val(),
      location: $('#location').val(),
      totalMoney: this.totalMoney,
      reservationDetails: this.reservationDetails
    }
    this.reservationService.save(this.reservation).subscribe(data => {
      $('.bd-example-modal-lg').modal('hide');
    }, error => console.log(error.message));
  }

  private updateInputService() {
    this.fromTime = $('#from-time').val();
    this.toTime = $('#to-time').val();
    let checker = this.isInputChecker();
    return checker;
  }
}
