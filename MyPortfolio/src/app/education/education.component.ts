import { Component } from '@angular/core';
import { Education } from '../models/models';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList: Education[] =[
    {
      institute: 'Balawantov Yadav HightSchool',
      course: 'SSC',
      duration: '2012-2017',
      score: '81 %',
    },
    {
      institute: 'Balawantov Yadav Jr College',
      course: 'HSC',
      duration: '2017-2019',
      score: '59 %',
    },
    {
      institute: 'Vivekanand College, Kolhapur',
      course: 'Bsc Cs',
      duration: '2019-2022',
      score: '74 %',
    }
  ];
  constructor() {}

  ngInit(): void{}

}
