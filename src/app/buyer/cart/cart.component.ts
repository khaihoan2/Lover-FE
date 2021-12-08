import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../service/reservation.service';
import {Reservation} from '../../model/reservation';
import {ActivatedRoute, Router} from '@angular/router';
import {API_URL} from '../../api-urls';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  apiUrl = API_URL;

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      this.findByRenter(id);
    })
  }

  findByRenter(id: any) {
    this.reservationService.findByRenter(id).subscribe(data => {
      this.reservations = data;
    }, error => console.log(error.message));
  }

  showInfoCart(id: any) {
    this.router.navigate([`/cart-info/${id}`]);
  }

  complete(id: any) {
    this.reservationService.accessInputStatus(id).subscribe(data => {

    }, error => console.log(error.message));
  }
}
