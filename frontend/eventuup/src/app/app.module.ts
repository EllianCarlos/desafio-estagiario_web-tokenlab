import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallendarComponent } from './shared/callendar/callendar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NextMeetingsComponent } from './shared/next-meetings/next-meetings.component';
import { DayBallComponent } from './shared/day-ball/day-ball.component';
import { MeetingComponent } from './shared/meeting/meeting.component';
import { CardComponent } from './shared/card/card.component';
import { CreateEventComponent } from './shared/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CallendarComponent,
    NavbarComponent,
    NextMeetingsComponent,
    DayBallComponent,
    MeetingComponent,
    CardComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
