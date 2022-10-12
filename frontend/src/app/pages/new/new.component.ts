import { Component, OnInit } from '@angular/core';
import { TodoType } from './todoType';
import { SaveService } from './save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public newTodo: TodoType = {
    title: ''
  } 

  constructor(
    private saveSvc: SaveService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTodo(){
    this.saveSvc.save(this.newTodo).subscribe(response => {
      console.log(response)
      this.router.navigate(['/list'])
    })
  }
}
