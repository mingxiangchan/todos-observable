import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  items = ['abc', 'abc']
  name = 'John'
  age = 16
  isStudent = false
  company = {
    name: 'Dell',
  }

  constructor() {}

  getItems() {
    return this.items
  }

  change() {
    // this.name = "Jane"
    // this.isStudent = true
    // this.age = 26
    this.items.push('abc')
    // this.company.name = 'Microsoft'

    console.log(this)
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getCompany() {
    return this.company
  }

  getIsStudent() {
    return this.isStudent
  }
}
