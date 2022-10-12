import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GetDataService } from './get-data.service';
import { TodoType } from './todoType';
import { SaveService } from './save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private id: string | null | undefined;

  public todo:TodoType = {
    id: 0,
    title: '',
    is_done: false,
    created_at: ''
  }

  constructor(
    private route: ActivatedRoute,
    private getdataSvc: GetDataService,
    private saveSvc: SaveService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getId()
    if (this.id){
      this.getEditData(this.id)
    }
  }

  getId(){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getEditData(id:string){
    this.getdataSvc.getdata(id).subscribe((res:any) => {
      console.log(res)
      this.todo = res;
    })
  }

  editTodo(){
    if (this.id){
      this.saveSvc.save(this.id, this.todo).subscribe(res => {
        console.log(res)
        this.router.navigate(['/list'])
      })
    }
  }

}
