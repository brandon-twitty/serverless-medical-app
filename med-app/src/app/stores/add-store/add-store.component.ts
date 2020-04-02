import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddStoreComponent implements OnInit {
  @Input() storeForm: FormGroup;
  @Input() index: number;
  @Output() deleteStore: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  delete() {
    this.deleteStore.emit(this.index);
  }
}
