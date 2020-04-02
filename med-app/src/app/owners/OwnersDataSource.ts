import {DataSource} from '@angular/cdk/table';
import {OwnerService} from '../shared/services/owner.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Owner} from './create-owner/_models/owner';

export class OwnersDataSource extends DataSource<any> {
  private owner = new BehaviorSubject<Owner[]>([]);
  constructor(private ownerService: OwnerService) {
    super();
  }
  connect(): Observable<Owner[]> {
    return this.ownerService.getOwners();
  }
  disconnect() {}

}
