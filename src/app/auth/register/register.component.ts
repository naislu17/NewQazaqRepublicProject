import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() userDetails = { id: '',first_name :'', last_name:'', email:'', password:'',isAdmin:'false' }
  constructor(public userService: UserService, public router: Router) { }


  ngOnInit(): void {
  }
  addUser(dataUser){
    this.userService.createUser(this.userDetails).subscribe((data:{})=>{
      this.router.navigate(['/login']);
    })
  }
}
