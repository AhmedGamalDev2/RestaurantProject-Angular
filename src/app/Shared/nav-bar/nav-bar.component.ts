import { Component } from '@angular/core';
import { UsersService } from 'src/Services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private serv:UsersService){}

  username():string{

    return this.serv.usernamed
    }

logout(){

  var LogOut = confirm('Are You Want Sign out ?')
  if(LogOut){
    this.serv.che=false;
    this.serv.usernamed="profile"
  }else{
    this.serv.che=true;
  }
}

checklog():boolean{
return this.serv.ispath
}

}
