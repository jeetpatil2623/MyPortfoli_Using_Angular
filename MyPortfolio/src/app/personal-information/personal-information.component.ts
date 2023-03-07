import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent  {
myData : string [][]=[
  ['Name', 'Sujit Sunil Patil'],
  ['DOB', '08/09/2001'],
  ['Education', 'BSc. CS'],
  ['Interest', 'Cricket'],
  ['Exp.', 'Fresher'],
];

aboutMe :string[]=[
'Hi I am Sujit Sunil Patil ',
'I am From Kolhapur',
'I have Bachlore Degree In Computer Science',
'Currently Pursuing Java FullStack Developement course',

];

constructor() {}

ngOnItit(): void{}
}
