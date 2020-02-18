import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {
  serverObj = [
    {accHolderName : 'Anil' , AccType : 'Active'},
    {accHolderName : 'Amar' , AccType : 'InActive'},
    {accHolderName : 'Ankit' , AccType : 'hidden'}
  ];

  constructor() { }
}
