import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'employeeSearch',
  pure: true
})
export class EmployeeSearchPipe implements PipeTransform {
  transform(values: any[], employeeSearch: string): any[] {
    if (!values || !employeeSearch) {
      return values;
    }
    const employeeList = _.cloneDeep(values);
    const lowerCasedString = employeeSearch.toString().toLowerCase();
    const returnArray: Array<any> = [];
    employeeList.forEach(value =>
      Object.keys(value).forEach(element => {
        if (element !== 'select' && element !== 'id') {
          if (
            value[element].toLowerCase().indexOf(lowerCasedString) !== -1 &&
            returnArray.indexOf(value) === -1
          ) {
            returnArray.push(value);
          }
        }
      })
    );
    return returnArray;
  }
}
