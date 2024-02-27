import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isSkillsOpen: boolean = false;
  oneAtATime = true;

  constructor(private titleService: Title, private renderer: Renderer2) {
    
    this.titleService.setTitle('Leon Lee - Resume')
  }

  DownloadFile() {
    const link = this.renderer.createElement('a')
    link.setAttribute('target', '_blank')
    link.setAttribute('href', '../../assets/Leon_Lee_Resume2.pdf')
    link.setAttribute('download', 'Leon_Lee_Resume.pdf')
    link.click()
    link.remove()
  }
}
