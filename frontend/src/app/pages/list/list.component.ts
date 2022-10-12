import { Component, OnInit } from '@angular/core';
import {GetDataService} from './get-data.service'
import { SetStatusService } from './set-status.service';
import { DeleteService } from './delete.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todos: any = [];
  constructor(
    private getdataservice: GetDataService,
    private setStatusSvc: SetStatusService,
    private deleteSvc: DeleteService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.getdataservice.get().subscribe(data => {
      this.todos = data;
    })
  }

  setStatus(id: number){
    this.setStatusSvc.setStatus(id).subscribe(res => {
      this.getData()
    })
  }

  deleteTodo(id:number){
    this.deleteSvc.delete(id).subscribe(res => {
      this.getData()
    })
  }

}
