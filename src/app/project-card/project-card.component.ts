import { Component , Input} from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})

export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef; // a reference to our modal

  constructor(private modalService: BsModalService) {

  }

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class : "modal-lg", // a boostrap class that makes our modal wider/larger
      initialState: {
        project: this.project
      }
    }
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
