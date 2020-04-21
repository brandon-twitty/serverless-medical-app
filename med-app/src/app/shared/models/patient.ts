import {Deserializable} from "./deserializable.model";

export class Patient implements Deserializable{
  ID: string;
  storeId: string;
  patientFirstName: string;
  patientLastName: string;
  patientPhoneNumber: number;
  patientEmail: string;
  appointmentDate: string;
  stripeConfirmationId: string;
  dateCreated: Date;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
