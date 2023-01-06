import { Pipe, PipeTransform } from '@angular/core';

import { Unit } from './unit';

@Pipe({
    name: 'unitFilter',
    pure: false
})
export class UnitFilterPipe implements PipeTransform {
    transform(items: any[], filter: Unit): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.type.indexOf(filter.type) !== -1);
    }
}