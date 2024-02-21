import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
  // set tab name
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Leon Lee - Home')
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.featuredProject = this.projectService.GetProjectById(1);
  }
}
