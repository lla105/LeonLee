import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  // projects: Project[] = [
  //   {id: 0, 
  //     name: "CRM Accounting Software", 
  //     pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
  //     projectLink: "https://github.com/lla105/AuTransactions", 
  //     summary: "A paid project for managing a client's day care business.", 
  //     description: "a CRM & accounting solution in Python with tkinter GUI, Google API, and MySQL, achieving a 50% reduction in dataretrieval time compared to previous system.", 
  //     tags: [Tag.PYTHON, Tag.TKINTER, Tag.GOOGLE_API, Tag.SQL]
  //   },
  //   {id: 1, 
  //     name: "Activity Auto Tracker (Android)", 
  //     pictures: ["../../assets/Android_map.jpg","src/assets/Android_profile.jpg","src/assets/Android_history.jpy"], 
  //     projectLink: "https://github.com/lla105/MyRun2", 
  //     summary: "An Android app that identifies & tracks user workout via Weka classifier.", 
  //     description: "●Collected activity data (standing, walking, running), applied Weka for machine learning, integrated the generated model into an app for real-time activity identification.\n● Implemented Google Maps API with a personal token to enable automatic GPS data tracking in the project.\n● Utilized core smartphone functions (eg gyroscope, accelerometer) to determine speed and location, enhancing GPS data accuracy in the project.", 
  //     tags: [Tag.KOTLIN, Tag.JAVA, Tag.GOOGLE_API, Tag.WEKA]
  //   },
  //   {id: 2, 
  //     name: "AI Class Project - SIPP", 
  //     pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
  //     projectLink: "https://github.com/lla105/417Project", 
  //     summary: "a Python-based Safe Interval Path Planning (SIPP) system for Multi-Agent Path Planning.", 
  //     description: "● Developed and implemented SIPP search algorithms in Python for Multi Agent Path Planning (MAPF) via Cooperative A* and Conflict-Based Search (CBS).\n● Also implemented Single Agent Path Planning via A* and SIPP.\n● Benchmarked the combination of the above four algorithms on diverse instances to analyze performance metrics like speed, nodes expanded, and memory usage. Instance classes include agents, map density, and obstacles.", 
  //     tags: [Tag.PYTHON]
  //   },
  //   {id: 3, 
  //     name: "Packet Forwarding & Client Server TCP", 
  //     pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
  //     projectLink: "https://github.com/lla105/Networking-Simulator", 
  //     summary: "C++/Python programs demonstrating the use of Routing Table and Client Server TCP data communication.", 
  //     description: "● Developed and implemented SIPP search algorithms in Python for Multi Agent Path Planning (MAPF) via Cooperative A* and Conflict-Based Search (CBS).\n● Also implemented Single Agent Path Planning via A* and SIPP.\n● Benchmarked the combination of the above four algorithms on diverse instances to analyze performance metrics like speed, nodes expanded, and memory usage. Instance classes include agents, map density, and obstacles.", 
  //     tags: [Tag.Cpp, Tag.PYTHON]
  //   },
  //   {id: 4, 
  //     name: "This Porfolio Website", 
  //     pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
  //     projectLink: "https://github.com/lla105/AngularPortfolioWebsite", 
  //     summary: "An Angular webpage built to showcase my software journey.", 
  //     description: "", 
  //     tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS]
  //   },

  // ];

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