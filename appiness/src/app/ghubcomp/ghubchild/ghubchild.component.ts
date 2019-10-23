import { Component, OnInit } from '@angular/core';
import { GhubService } from 'src/app/serivices/ghub.service';

@Component({
  selector: 'app-ghubchild',
  templateUrl: './ghubchild.component.html',
  styleUrls: ['./ghubchild.component.css']
})
export class GhubchildComponent implements OnInit {
  usersdetails;
  constructor( private gservice:GhubService) { 
     console.log(this.usersdetails)
  }
  
    

  ngOnInit() {
    
   this.showhub();
   console.log(this.usersdetails)
  }

  
  showhub(){
            this.gservice.gethub().subscribe(
            //  data => this.usersdetails = data,
             data => console.log(data)
              
            )
            
  }
}
