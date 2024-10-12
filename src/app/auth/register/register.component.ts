import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from './../../../models/auth/user';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  firstname : string = ''
  lastname : string = ''
  email : string = ''
  password : string = ''
  confirmpassword : string = ''
  user: User[] = []


  constructor(private registerService: RegisterService) {

  }
  ngOnInit(): void {

  }

  register() {
    const user = new User(this.firstname,this.lastname, this.email, this.password, this.confirmpassword);

    this.registerService.registerUser(user).subscribe({
      next: (data) => {
        console.log(data);
      }
    })

  }
}
