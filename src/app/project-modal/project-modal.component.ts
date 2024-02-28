import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  project = {} as Project;
  
  constructor(public bsModalRef: BsModalRef, private sanitizer: DomSanitizer) {

  }

  isVideo(item: string): boolean {
    return item.endsWith('.mp4');
  }
  
  isImage(item: string): boolean {
    return item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg');
  }
  getSanitizedDemoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.project.projectLink);
  }
  
}
