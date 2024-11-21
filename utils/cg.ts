import { Timestamp } from "firebase/firestore";

//addressBook


export type AddressUpdateSource = "addressBook" | "coo";
/* Address Book */

export type DateField =
  | "businessLicenseExpiry"
  | "manufacturingLicenseExpiry"
  | "chamberMembershipExpiry";

export type ProfileAddressType = "registeredAddress" | "operationsAddress";

export type FileUploadProps = {
  label: string;
};

//applications types

//certificate of origin types
export type ShipmentMode = "edit" | "add" | "view";

export interface ShippingItem {
  id: string;
  description: string;
  countryOfOrigin: string[];
  grossWeight: string;
  hsCode?: string;
  marksAndNumbers?: string;
  netWeight?: string;
}

export type InvoiceItem = {
  item: string,
  total: number
  description?: string,
  quantity?: number,
  unitPrice?: number,
}

export type Payments = {
  transId: string,
  date: string,
  method: string
  amount: number,
}

export type ApplicationStatus = "draft" | "pending" | 'withdrawn' | "approved" | "declined" | "completed";
export type TimeLine = {
  source: 'client' | 'partner' | 'admin';
  status: ApplicationStatus;
  date: Timestamp;
  user: string;
  comment?: string;
  message?: string
}

export interface Application {
  applicationId: string;
  certificateType: "cfs" | "gmp" | "coo";
  partnerCode: string;
  language: string;
  invoice: {
    number?: string;
    date?: string;
    items?: InvoiceItem[];
    payments?: Payments[];
    total: number;
    paymentReceived?: boolean;
    balanceDue?: number;
  }
  profileId: string;
  createdAt?: Timestamp | null;
  lastUpdatedAt: Timestamp | null;
  timeLine: TimeLine[]
  status: ApplicationStatus;
  nusaccAuthenticate: boolean;
  authentication: 'legalization' | 'apostille' | undefined;
  deliveryMethod: "email" | "mail" | "prepaidLabel";
  mailingAddress: string | null;
  mailingLabel: string | null;
  destinationCountry: null | string;
  scannedCopies?: boolean
}


export type DocType = Application['certificateType'];

export interface CG extends Application {
  copies: number;
  isManufacturer: boolean;
  addendumText: false | string;
  products: string[];
  documents: {
    invoices: string[];
    mfgStatements: string[];
    gmpStatements: string[];
  }
}

export interface COO extends Application {
  seller: string;
  consignee: string;
  buyer: string;
  transportationType: string;
  transportType: string;
  portOfLoading: string;
  destinationPort: string;
  consignorReference: string;
  importPermitNumber: string;
  BillOfLadingNumber: string;
  ownerAgent: string;
  exportCarrier: string;
  forwardingAgent: string;
  exportDate: string;
  Remarks: string;
  shipment: ShippingItem[];
  documents: {
    invoice: string;
    packingList: string;
    otherDocuments: string;
  }
}

export type CertificateOptions = {
  isoCode: string;
  language: string;
  fee: number;
};

export type CooDocumentType =
  | "invoice"
  | "packingList"
  | "otherDocuments"
  | "mailingLabel";


export interface DocumentState {
  documents: DocType[],
  initialized: boolean,
  editDialog: boolean,
  selectedDocument: DocType | null,
  documentDialog: boolean,
}

export interface RateCard { isoCode: string, language: string, fee: number }
export type PartnerListItem = { code: string, name: string }

export interface JobPayment {
  jobId: string;
  jobPaymentId: string;
  amountPaid: number;
  datePaid: string;
  paymentEvidence: string;
}
