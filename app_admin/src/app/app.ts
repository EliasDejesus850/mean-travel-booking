import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { JsonPipe }  from "@angular/common"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TripListing, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways Admin!';
}
