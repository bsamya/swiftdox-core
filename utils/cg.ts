import { Timestamp } from "firebase/firestore";

//addressBook


type AddressUpdateSource = "addressBook" | "coo";
/* Address Book */

type DateField =
  | "businessLicenseExpiry"
  | "manufacturingLicenseExpiry"
  | "chamberMembershipExpiry";

type ProfileAddressType = "registeredAddress" | "operationsAddress";

type FileUploadProps = {
  label: string;
};

//applications types

//certificate of origin types
type ShipmentMode = "edit" | "add" | "view";

interface ShippingItem {
  id: string;
  description: string;
  countryOfOrigin: string[];
  grossWeight: string;
  hsCode?: string;
  marksAndNumbers?: string;
  netWeight?: string;
}

type InvoiceItem = {
  item: string,
  total: number
  description?: string,
  quantity?: number,
  unitPrice?: number,
}

type Payments = {
  transId: string,
  date: string,
  method: string
  amount: number,
}

type ApplicationStatus = "draft" | "pending" | 'withdrawn' | "approved" | "declined" | "completed";
type TimeLine = {
  source: 'client' | 'partner' | 'admin';
  status: ApplicationStatus;
  date: Timestamp;
  user: string;
  comment?: string;
  message?: string
}

interface Application {
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

interface CG extends Application {
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

interface COO extends Application {
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

type CertificateOptions = {
  isoCode: string;
  language: string;
  fee: number;
};

type CooDocumentType =
  | "invoice"
  | "packingList"
  | "otherDocuments"
  | "mailingLabel";


interface DocumentState {
  documents: DocType[],
  initialized: boolean,
  editDialog: boolean,
  selectedDocument: DocType | null,
  documentDialog: boolean,
}

interface RateCard { isoCode: string, language: string, fee: number }
type PartnerListItem = { code: string, name: string }

interface JobPayment {
  jobId: string;
  jobPaymentId: string;
  amountPaid: number;
  datePaid: string;
  paymentEvidence: string;
}