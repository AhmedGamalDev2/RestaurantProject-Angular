import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/Interfaces/iuser';
import { UsersService } from 'src/Services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.css']
})
export class SginupComponent {
  users: Iuser[] =[];
  LoginForm: FormGroup = new FormGroup({

    email: new FormControl('', [Validators.pattern('^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$'), Validators.required]),
    password1: new FormControl('', [Validators.minLength(5), Validators.required]),
    password2: new FormControl('', [Validators.minLength(5), Validators.required]),
    username: new FormControl('', [Validators.minLength(3), Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.minLength(10), Validators.required]),
    role: new FormControl('user')
  })

ngOnInit(): void {
  this.accountServices.getall().subscribe((data) => { this.users = data })

}

  constructor(private accountServices: UsersService, private router: Router, private snackBar: MatSnackBar) { }
  get nameControl() {
    return this.LoginForm.controls['username'];
  }
  get emailControl() {
    return this.LoginForm.controls['email'];
  }
  get password1Control() {
    return this.LoginForm.controls['password1'];
  }
  get password2Control() {
    return this.LoginForm.controls['password2'];
  }
  get mobileControl() {
    return this.LoginForm.controls['mobile'];
  }
  get addressControl() {
    return this.LoginForm.controls['address'];
  }
  get roleControl() {
    return this.LoginForm.controls['role'];
  }




  chekpassword(): boolean {
    if (this.password1Control.value == this.password2Control.value) {
      return true;
    }
    else
      return false;

  }


  userdata: Iuser = {
    username: this.nameControl.value,
    email: this.emailControl.value,
    password: this.password1Control.value,
    role: this.roleControl.value,
    mobile: this.mobileControl.value,
    address: this.addressControl.value
  };
  adduser() {

    this.userdata = {
      username: this.nameControl.value,
      email: this.emailControl.value,
      password: this.password1Control.value,
      role: this.roleControl.value,
      mobile: this.mobileControl.value,
      address: this.addressControl.value
    };
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['warning-snackbar']
    });
  }
  Login(e: Event) {
   let c;
    this.accountServices.getall().subscribe((data) => { this.users = data })

    if (this.users.length>0) {
    this.users.filter(element =>{

        if (element.email == this.emailControl.value) {
        c=1;
      }})
    }

    if (this.LoginForm.valid && c!=1) {
      this.adduser()
      this.accountServices.add(this.userdata).subscribe();
      this.accountServices.che= true;
      this.accountServices.usernamed = this.userdata.username
     this.router.navigate([''])
    }
    else {
      if (this.LoginForm.valid && c==1) {

 this.openSnackBar('This account already exist', 'Ok');

}
}
}
}
