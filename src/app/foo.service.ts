import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MenuDefinitionRespository {
  definitions: any[] = [];
}


@Injectable({providedIn: 'root'})
export class FooService {
   menus$: Observable<any[]>;
  constructor(respository: MenuDefinitionRespository) {
    this.menus$ = of(respository.definitions);
  }
}
