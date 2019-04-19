import { Component, OnInit } from '@angular/core'
import { TodosService } from '../todos.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  items: string[] = []
  name: string = null
  age: number = null
  isStudent: boolean = false
  company = {}

  constructor(private service: TodosService) {}

  ngOnInit() {
    this.items = this.service.getItems()
    this.name = this.service.getName()
    this.age = this.service.getAge()
    this.isStudent = this.service.getIsStudent()
    this.company = this.service.getCompany()
  }

  addTodos() {
    this.service.change()
  }
}
