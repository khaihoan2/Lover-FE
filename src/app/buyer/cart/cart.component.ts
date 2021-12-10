import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../service/reservation.service';
import {Reservation} from '../../model/reservation';
import {ActivatedRoute, Router} from '@angular/router';
import {API_URL} from '../../api-urls';
import {NotificationService} from '../../service/notification/notification.service';

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
              private notificationService: NotificationService,
              private router: Router) { }

  ngOnInit() {
    this.findByRenter();
  }

  findByRenter() {
    this.reservationService.findByRenter().subscribe(data => {
      this.reservations = data;
      if (this.reservations.length == 0) {
        this.router.navigate(['/404'])
      }
    }, error => this.notificationService.notify('error', 'Failed search'));
  }

  showInfoCart(id: any) {
    this.router.navigate([`/cart-info/${id}`]);
  }

  complete(id: any) {
    this.reservationService.accessInputStatus(id).subscribe(data => {
      this.notificationService.notify('success', 'Congratulations on your successful appointment')
    }, error => console.log(error.message));
  }
}
