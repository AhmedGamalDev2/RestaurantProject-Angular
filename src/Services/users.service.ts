import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iuser } from 'src/Interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usernamed:string="profile";
  baseUrl: string = "http://localhost:3005/users";
  users:Iuser[]|undefined;
  che:boolean=false;
  constructor(private http: HttpClient,private rout:Router) { }
login(use:Iuser){
    let currentuser

  this.http.get<Iuser[]>(this.baseUrl).subscribe((data)=>{this.users=data})
  this.users?.filter((f)=>{if(f.email==use.email&&f.password==use.password){currentuser=f;this.usernamed=f.username
  }})


  if (currentuser) {

  this.che=true;


  this.rout.navigate(['/'])
    }
    else{
      this.usernamed="profile";
      this.che=false;
    }

  }

  get ispath(){
    return this.che
  }

logout(){
  this.che=false
}


getall():Observable<Iuser[]> {
  return this.http.get<Iuser[]>(this.baseUrl);
}

getbyid(id: number):Observable<Iuser> {
  return this.http.get<Iuser>(`${this.baseUrl}/${id}`);
}

add(us: Iuser) {

  return this.http.post(this.baseUrl, us);
}

update(id: number, use: Iuser) {
  return this.http.put(`${this.baseUrl}`, use);
}

delete(id: number){
  return this.http.delete(`${this.baseUrl}`);
}
}
