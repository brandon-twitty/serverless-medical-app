import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAgentComponent implements OnInit {
  @Input() agentForm: FormGroup;
  @Input() index: number;
  @Output() deleteAgent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  delete() {
    this.deleteAgent.emit(this.index);
  }
}
