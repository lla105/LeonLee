import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // set tab name
  constructor(private titleService: Title) {
    this.titleService.setTitle('hire me pls :(')
  }
}
