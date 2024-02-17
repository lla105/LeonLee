import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sameple app',
    summary: 'test descripton',
    descripton: '',
    projectLink: '',
    tags: ['Angular', 'Typescrtip'],
    pictures: []
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Leon Lee - Portfolio')
  }
}
