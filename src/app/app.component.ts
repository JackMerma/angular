import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users=['jack', 'daniela', 'roro'];
  activate=false;
  title = 'my-dream-app';
  name:string;
  email;
  webpage:string;
  hobbies:string[];
  showHobbies: boolean;

  constructor(){
    console.log("Constructor working...");
    this.name = "Jackson Fernando Merma Portocarrero";
    this.email = "jmermap@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programacion","Music"];
    this.showHobbies = false;
  }

  showhobbies(){
    return this.showHobbies;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby:any){
    this.hobbies.push(hobby.value);
    hobby.value="";
    return false;
  }

  sayHello(){
    alert("hola desde app.component")
  }
  deleteUser(user:any){
    for(let i=0;i<this.users.length;i++){
      if(user==this.users[i]){
        this.users.splice(i, 1);
      }      
    }
  }

  addUser(newUser:any){
    this.users.push(newUser.value);
    newUser.value="";
    newUser.focus();
    return false;
  }
}
