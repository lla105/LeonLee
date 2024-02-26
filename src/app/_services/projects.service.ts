import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, 
      name: "CRM Accounting Software", 
      pictures: ["../../assets/Au2.gif","../../assets/Au1.jpeg","../../assets/Au3.jpeg"], 
      projectLink: "https://github.com/lla105/AuTransactions", 
      summary: "A paid project for managing a client's day care business.", 
      description: "a CRM & accounting solution in Python with tkinter GUI, Google API, and MySQL, achieving a 50% reduction in dataretrieval time compared to previous system.", 
      tags: [Tag.PYTHON, Tag.TKINTER, Tag.GOOGLE_API, Tag.SQL] 
    },
    {id: 1, 
      name: "Activity Auto Tracker (Android)", 
      pictures: ["../../assets/Android_bike.gif", "../../assets/Andriod_map.jpeg","../../assets/Android_weka.jpeg"], 
      projectLink: "https://github.com/lla105/MyRun2", 
      summary: "An Android app that identifies & tracks user workout via Weka classifier.", 
      description: `Collected activity data (standing, walking, running), applied Weka for machine learning, integrated the generated model into an app 
      for real-time activity identification. Implemented Google Maps API with a personal token to enable automatic GPS data tracking in the project.
      Utilized core smartphone functions (e.g., gyroscope, accelerometer) to determine speed and location, enhancing GPS data accuracy in the project.`,
    tags: [Tag.KOTLIN, Tag.JAVA, Tag.GOOGLE_API, Tag.WEKA]
    },
    {id: 2, 
      name: "AI Class Project - SIPP", 
      pictures: ["../../assets/MAPF1.gif","../../assets/MAPF2.gif","../../assets/MAPF3.jpeg"], 
      projectLink: "https://github.com/lla105/417Project", 
      summary: "Safe Interval Path Planning (SIPP) system for Multi-Agent Path Planning.", 
      description: "● Developed and implemented SIPP search algorithms in Python for Multi Agent Path Planning (MAPF) via Cooperative A* and Conflict-Based Search (CBS).\n● Also implemented Single Agent Path Planning via A* and SIPP.\n● Benchmarked the combination of the above four algorithms on diverse instances to analyze performance metrics like speed, nodes expanded, and memory usage. Instance classes include agents, map density, and obstacles.", 
      tags: [Tag.PYTHON, Tag.ALGO, Tag.AI]
    },
    {id: 3, 
      name: "Packet Forwarding/Client Server TCP", 
      pictures: ["../../assets/packetforward.jpeg","../../assets/TCP.jpeg","../../assets/TCP2.jpeg"], 
      projectLink: "https://github.com/lla105/Networking-Simulator", 
      summary: "C++/Python programs demonstrating the use of Routing Table and Client Server TCP data communication.", 
      description: "● A C++/Python program that demonstrates packet forwarding with Routing Table with a given destination IP address.\n ●In addition, it simulates client-server interaction over TCP with added functions for packet loss and corruption simulation.", 
      tags: [Tag.Cpp, Tag.PYTHON]
    },
    {id: 4, 
      name: "This Porfolio Website", 
      pictures: ["../../assets/p1.png","../../assets/p2.png","../../assets/p3.png"], 
      projectLink: "https://github.com/lla105/AngularPortfolioWebsite", 
      summary: "An Angular webpage built to showcase my software journey. Constantly being updated.", 
      description: "", 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS]
    },

  ];
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError("There's no project that matches the id: " + id);
    }
    return project;
  }
}

// angular service is similar to component.
// difference is it's not associated to a html or css
// it's also desginated as an Injectable