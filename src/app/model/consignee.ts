import { Country } from "./country";
import { DocumentType } from "./documentType";

export class Consignee {
    public id: number;
    public name: string;
    public documentNumber: string;
    public documentType: DocumentType;
    public email: string;
    public phoneNumber: string;
    public cellNumber: string;
    public documentImg: string;
    public country: Country;
    public address: string;
    public createdAt: Date;
}