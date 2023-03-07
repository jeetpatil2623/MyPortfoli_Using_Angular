import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skills :Skill[]=[
{
  name: 'Core Java',
  level: 'Expert',
  rating: 90,
},
{
  name: 'Python',
  level: 'Intermediate',
  rating: 70,
},
{
  name: 'Angular',
  level: 'Beganier',
  rating: 40,
},
{
  name: 'MySql',
  level: 'Intermediate',
  rating: 50,
},
{
  name: 'HTML',
  level: 'Intermediate',
  rating: 70,
},
{
  name: 'CSS',
  level: 'Beganier',
  rating: 40,
}
];
}
