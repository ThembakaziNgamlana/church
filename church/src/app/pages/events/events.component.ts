import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  events: Event[] = [
    { id: 1, title: 'Outdoor Donating', date: 'April 10, 2024', time: '12:00 PM', location: 'Zult Sprit', description: 'As the church we were donating blankets and hanging out food to the people in need' },
    { id: 2, title: 'Children Dedication', date: 'August 22, 2024', time: '9:00 AM', location: 'Church Hall', description: 'This was a children dedication having friends and family as a company.' },
    { id: 3, title: 'Dedication of the church', date: 'May 30, 2024', time: '11:00 AM', location: 'Church Hall', description: 'The church was given an original name as North-Riding Sda Church' },
    { id: 4, title: 'Event Title 4', date: 'August 29, 2024', time: '5:00 PM', location: 'Church Hall', description: 'Description of the event goes here.' },
    { id: 5, title: 'Adventures Outing', date: '29 August March, 2024', time: '11:00 AM', location: 'Johannesburg Zoo', description: 'Adventures where exploring nature and animals' },
    { id: 6, title: 'Couples Outing', date: '11 January, 2024', time: '10:00 AM', location: 'Kings Kloof Hiking Trail', description: 'The Couples were hiking outdoor exploring nature.' },
    { id: 7, title: 'Womens Event', date: 'August 19, 2024', time: '10:00 AM', location: 'Church Hall', description: 'Women were having lord supper and washing feet' },
    { id: 8, title: 'Church event', date: 'May 29, 2024', time: '1:00 PM', location: 'Church Hall', description: 'The Church was having a lord supper and washing feet.' }
  ];


  filteredEvents: Event[] = [];
  searchQuery: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.filteredEvents = this.events; // Initialize with all events
  }

  performSearch(): void {
    this.filteredEvents = this.events.filter(event => 
      event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  navigateToSEvent1() {
    this.router.navigate(['/event1']);
  }

  navigateToMEvent2() {
    this.router.navigate(['/event2']);
  }

}
