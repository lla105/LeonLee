import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';


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
    // tags: ['Angular', 'Typescrtip'],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Leon Lee - Portfolio')
  }
}
