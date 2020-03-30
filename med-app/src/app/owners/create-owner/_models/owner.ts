import {ReceivingAgent} from './receiving-agent';
import {Deserializable} from './deserializable.model';
import {Store} from './store';
import {Patient} from './patient';

export class Owner implements Deserializable {

  OwnersFirstName: string;
  OwnersLastName: string;
  ID: string;
  OwnersPhoneNumber: number;
  OwnersEmailAddress: string;
  OwnersPaymentMethod: string;
  OwnersCommissionRate: number;
  ReceivingAgentCommissionRate: number;
  agentId: number;
  agents: ReceivingAgent [];
  stores: Store [];
  patients: Patient [];


  constructor(OwnersFirstName: string, OwnersLastName: string, ID: string, OwnersPhoneNumber: number, OwnersEmailAddress: string, OwnersPaymentMethod: string, OwnersCommissionRate: number,
              ReceivingAgentCommissionRate: number, agentId: number, agents?: ReceivingAgent[], stores?: Store[], patients?: Patient[]) {
    this.OwnersFirstName = OwnersFirstName;
    this.OwnersLastName = OwnersLastName;
    this.ID = ID;
    this.OwnersPhoneNumber = OwnersPhoneNumber;
    this.OwnersEmailAddress = OwnersEmailAddress;
    this.OwnersPaymentMethod = OwnersPaymentMethod;
    this.OwnersCommissionRate = OwnersCommissionRate;
    this.ReceivingAgentCommissionRate = ReceivingAgentCommissionRate;
    this.agentId = agentId;
    this.agents = agents;
    this.stores = stores;
    this.patients = patients;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    this.agents = input.agents.map(agent => new ReceivingAgent().deserialize(agent));
    this.stores = input.stores.map( store => new Store().deserialize(store));
    this.patients = input.patient.map(patient => new Patient().deserialize(patient));
    return this;
  }

}
