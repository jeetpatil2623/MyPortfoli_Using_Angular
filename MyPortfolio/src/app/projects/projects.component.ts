import { Component } from '@angular/core';
import { Project } from '../models/models';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[]=[
    {
      title: 'Online Fruit Management System',
      technologies: '  Python , MySql , Html  , Css ',
      description : ['We created a dynamic website.','A project where we display fruits & information related to the fruit',
      ' If customers want to buy products a link to the registration form is also given.','Customers can enroll themselves and can buy the product.','Customers can download the receipt.','An e-commerce website allows people to buy and sell physical goods, services, and digital products over the internet rather than at a particular location'],
    }
  ];

}
