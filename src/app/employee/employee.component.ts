import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public searchText: string;
  public employeeData: any;
  constructor() {}
  ngOnInit() {
    this.employeeData = [
      { id: 1, select: false, name: 'Anil kumar', area: 'Airoli' },
      { id: 2, select: false, name: 'Sunil Kumar Singh', area: 'Bandup' },
      { id: 3, select: false, name: 'Sushil Singh', area: 'Nahur' },
      { id: 4, select: false, name: 'Aradhya Singh', area: 'Vikroli' }
    ];
  }

  public onSelect(value: boolean, employee: any): void {
   this.employeeData.forEach(
        item => {
          if (item.id === employee.id) {
            item.select = value;
          }
        }
      );
  }
}
