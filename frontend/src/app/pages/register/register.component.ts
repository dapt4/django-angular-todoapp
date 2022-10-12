import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Data} from './dataTypes';
import {SaveService} from './save.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userForm: Data = {
    username:'',
    email: '',
    password: ''
  }

  constructor(private saveSvc: SaveService) { }

  ngOnInit(): void {
  }

  handlerSubmit(){
    console.log(this.userForm)
    this.saveSvc.save(this.userForm).subscribe((response)=>{
      console.log(response)
    })
  }

}
