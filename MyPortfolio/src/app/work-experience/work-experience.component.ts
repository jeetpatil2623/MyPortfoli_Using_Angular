import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  MyworkList: WorkExperience[]=[
    {
      role: 'Trainee Software Developer',
      company: 'HefShine Software Pvt. Ltd.',
      duration: '6 months',
      description: [  
        'Java Full Stack Developer',
        'Core Java','Spring','Angular', 'MySql'
      ],
    },
    
  ];


}
