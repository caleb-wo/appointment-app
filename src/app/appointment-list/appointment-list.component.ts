import { Component } from '@angular/core';
import { Appointment } from '../models/appointment'

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  appointment: Appointment = {
    id: 1,
    title: "Take dog for a walk",
    date: new Date("2025-11-3"),
  }
}