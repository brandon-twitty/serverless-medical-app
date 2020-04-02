import {Deserializable} from '../../shared/models/deserializable.model';

export class ReceivingAgent  {
  ID: string;
  receivingAgentName: string;
  raEmail: string;
  raPhoneNumber: number;
  ReceivingAgentCommissionRate: number;

  /*deserialize(input: any): this {
    return Object.assign(this, input);
  }*/
}
