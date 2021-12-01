export interface Reservation {
  id?: number;
  renter?: any;
  rentee?: any;
  startFrom?: Date;
  endAt?: Date;
  location?: string;
  reserveAt?: Date;
  status?: boolean;
}
