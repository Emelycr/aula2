import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAprovado = false;
  isError = false;

  user = ""
  pwd = ""

  login(){
    
    // console.log("User = " + this.user + "Password = " + this.pwd)
    if(this.user == "emely123" && this.pwd == "1234") {
      this.isError = false;
      this.isAprovado = true;
      console.log ("Login Aprovado")
     } else { 
      this.isError = true;
      this.isAprovado = false
    }
    
  }

}
