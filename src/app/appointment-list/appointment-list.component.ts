import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment(){
    if (this.newAppointmentTitle.trim().length 
        && this.newAppointmentDate){
      this.appointments.push({
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      });

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(idx: number){
    this.appointments.splice(idx, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");

    this.addAppointment = savedAppointments ? JSON.parse(savedAppointments) : [];
  }
}