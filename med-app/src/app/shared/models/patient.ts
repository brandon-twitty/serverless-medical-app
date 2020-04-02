import {Deserializable} from "./deserializable.model";

export class Patient implements Deserializable{
  ID: string;
  storeUrl: string;
  firstName: string;
  lastName: string;
  patientPhoneNumber: number;
  patientEmail: string;
  appointmentDate: string;
  dateCreated: Date;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
