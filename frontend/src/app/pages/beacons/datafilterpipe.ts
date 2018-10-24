import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => {
        // Beacon ID
        const hasBeaconId = row.id && row.id.indexOf(query.toUpperCase().replace(/\s/g, '')) > -1;
        // Name
        const hasName = row.name && row.name.toUpperCase().indexOf(query.toUpperCase()) > -1;
        return hasBeaconId || hasName;
      });
    }
    return array;
  }
}
