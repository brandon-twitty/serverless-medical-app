import {FormControl} from '@angular/forms';
import {ReceivingAgent} from './receiving-agent';

export class AgentForm {
  ID = new FormControl();
  receivingAgentName = new FormControl();
  raEmail = new FormControl();
  raPhoneNumber = new FormControl();
  ReceivingAgentCommissionRate = new FormControl();


  constructor(agent: ReceivingAgent) {
    this.ID.setValue(agent.raPhoneNumber);
    this.receivingAgentName.setValue(agent.receivingAgentName);
    this.raEmail.setValue(agent.raEmail);
    this.raPhoneNumber.setValue(agent.raPhoneNumber);
    this.ReceivingAgentCommissionRate.setValue(agent.ReceivingAgentCommissionRate);
  }
}
