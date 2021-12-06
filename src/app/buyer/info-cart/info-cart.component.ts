import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../service/reservation.service';
import {ActivatedRoute} from '@angular/router';
import {Reservation} from '../../model/reservation';

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.css']
})
export class InfoCartComponent implements OnInit {

  reservation: Reservation = {};

  constructor(private reservationService: ReservationService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      this.findById(id);
    })
  }

  findById(id: any) {
    this.reservationService.findById(id).subscribe(data => {
      this.reservation = data;
    }, error => console.log(error.message));
  }

  completed(id: any) {
    this.reservationService.accessInputStatus(id).subscribe(data => {

    }, error => console.log(error.message));
  }
}
