import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, startWith, tap, map } from 'rxjs/operators';
import { far, IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Injectable()
export class IconPickerService {
  readonly farRegular: Observable<IconDefinition[]>;
  private searchTerm = new Subject<string>();

  constructor() {
    this.farRegular = of(Object.values(far)).pipe(
      switchMap(icons =>
        this.searchTerm.pipe(
          map(term => this.filter(icons, term)),
          startWith(icons)
        )
      )
    );
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  private filter(icons: IconDefinition[], value: string) {
    return icons.filter(p =>
      value ? p.iconName.toLowerCase().includes(value.toLowerCase()) : icons
    );
  }
}
