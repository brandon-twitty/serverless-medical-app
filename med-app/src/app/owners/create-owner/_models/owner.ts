import {ReceivingAgent} from '../../../agent/_models/receiving-agent';
import {Deserializable} from '../../../shared/models/deserializable.model';
import {Store} from '../../../stores';
import {Patient} from '../../../shared/models/patient';

export class Owner  {

  OwnersFirstName: string;
  OwnersLastName: string;
  ID: number;
  OwnersPhoneNumber: number;
  OwnersEmailAddress: string;
  OwnersPaymentMethod: string;
  OwnersCommissionRate: number;
  ReceivingAgentCommissionRate: number;
  agentId: number;
  //agents: ReceivingAgent [];
  //stores: Store [];
 // patients: Patient [];


 /* constructor(OwnersFirstName: string, OwnersLastName: string, ID: number, OwnersPhoneNumber: number, OwnersEmailAddress: string, OwnersPaymentMethod: string, OwnersCommissionRate: number,
              ReceivingAgentCommissionRate: number, agentId: number, agents: ReceivingAgent[], stores: Store[], patients: Patient[]) {
    this.OwnersFirstName = OwnersFirstName;
    this.OwnersLastName = OwnersLastName;
    this.ID = OwnersPhoneNumber;
    this.OwnersPhoneNumber = OwnersPhoneNumber;
    this.OwnersEmailAddress = OwnersEmailAddress;
    this.OwnersPaymentMethod = OwnersPaymentMethod;
    this.OwnersCommissionRate = OwnersCommissionRate;
    this.ReceivingAgentCommissionRate = ReceivingAgentCommissionRate;
    this.agentId = agentId;
    //this.agents = agents;
    //this.stores = stores;
    //this.patients = patients;
  }*/

  /*deserialize(input: any): this {
    Object.assign(this, input);
    this.agents = input.agents.map(agent => new ReceivingAgent().deserialize(agent));
    this.stores = input.stores.map( store => new Store().deserialize(store));
    this.patients = input.patient.map(patient => new Patient().deserialize(patient));
    return this;
  }*/
  getFullName() {
    return this.OwnersFirstName + ' ' + this.OwnersLastName;
  }
}
