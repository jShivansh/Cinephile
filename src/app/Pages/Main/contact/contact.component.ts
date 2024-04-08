import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private title: Title) {
    this.title.setTitle('Cinephile | Contact')
   }

  ngOnInit(): void {
  }

  submitMessage(){
    alert('Thank you');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
