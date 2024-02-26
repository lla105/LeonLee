import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';
import { ProjectsService } from '../_services/projects.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
 
  projects = {} as Project[]

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Leon Lee - Portfolio')
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.projects = this.projectService.GetProjects()
    
  }
}

// A C++ program providing router funcality based on a routing table.
// Given a Routing Table in .txt format, the program sorts it based on subnet mask length.\nThe program performs bitwise AND between destination IP address (input by user) & IP addresses in the routing table.\nIt makes packet forwarding decision from the routing table and provides information about destination IP address, next hop IP address, and the interface through which the packet will be forwarded.
// https://github.com/lla105/Networking-Simulator/tree/main