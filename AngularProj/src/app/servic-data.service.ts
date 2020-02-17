import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicDataService {

  student = [
    {sid : 101 , sname : 'Aman', address : {dist : 'Vns', state : 'UP', zip : 221005 }},
    {sid : 102 , sname : 'Azhar', address : {dist : 'Mumbai', state : 'Maharastra', zip : 221003 }},
    {sid : 103 , sname : 'Akash', address : {dist : 'Lucknow', state : 'UP', zip : 241063 }},
    {sid : 104 , sname : 'Amar', address : {dist : 'Gorakhpur', state : 'UP', zip : 218503 }},
    {sid : 105 , sname : 'Aayushaman', address : {dist : 'bhopal', state : 'MP', zip : 418503 }}
  ];

  Marks =[
    {math : 66, english : 77 , physics : 88, sid : 101},
    {math : 94, english : 58 , physics : 89, sid : 102},
    {math : 46, english : 98 , physics : 48, sid : 103},
    {math : 84, english : 39 , physics : 71, sid : 104},
    {math : 43, english : 62 , physics : 54, sid : 105},

  ];

  getStudent(){
    return this.student;
  }

  getMarks(){
    return this.Marks;
  }
  constructor() { }
}
