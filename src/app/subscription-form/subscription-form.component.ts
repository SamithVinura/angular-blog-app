import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent implements OnInit {
  isEmailexits:boolean=false
  emaildata:any
  isSubscribed:boolean = true
  constructor(private subService: SubscribersService) {}

  ngOnInit(): void {}

  onSubmit(subForm: any) {
    console.log(subForm.value.name);
    const subData: Sub = {
      name: subForm.value.name,
      email: subForm.value.email,
    };
   this.subService.loadAllSubs().subscribe((subs) => {
      const found = subs.find((sub) => {
        return sub['email'] === subData.email;
      });

      if(found){
        this.isEmailexits=true
      }else{
        this.subService.addSubs(subData)
        this.isEmailexits=false
        this.isSubscribed =false

      }
    });



  }
}
