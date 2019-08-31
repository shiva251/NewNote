/*
* Modification Details:
* 1. This is the custom Pipe class to define/show the notes/titles in ascedning order on view page
*/

import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortPipe implements PipeTransform {

  transform(value: any[], column: string, order = ''): any[] {
    if (!value || !column || column === '' || order === '') { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    return _.orderBy(value, [column], [order]);
  }
}