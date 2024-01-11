import { Timestamp } from '@firebase/firestore';

type Result = {
  approved?: boolean;
  declined?: string[]
}

export interface JobDocument {
  id: string;
  documentType: null | 'legal' | 'shipping';
  fee?: number;
  result: undefined | Result;
}

type ItemBilling = {
  fee: number;
  qty: number;
  total: number;
}

export interface LegalDocument {
  id: string;
  result: undefined | Result;
  approved?: boolean;
  declined?: false | string[];
  documentType: 'legal';
  documentTypeId: string | null
  attachment: string | null
  billing?: ItemBilling
}

export interface ShippingDocument {
  id: string;
  result: undefined | Result;
  documentType: 'shipping';
  documents: { [key: string]: number };
  attachments: string[];
  billing?: ItemBilling
}

export type Job = {
  jobId: string;
  profileId: string;
  agentId: string | null;
  reference: string;
  country: string;
  region: null | string;
  status: JobStatus;

  items: (ShippingDocument | LegalDocument)[];
  events: {
    created?: { date: Timestamp, by: string }
    lastUpdated?: { date: Timestamp, by: string }
    submitted?: { date: Timestamp, by: string }
    completed?: { date: Timestamp, by: string }
    withdrawn?: { date: Timestamp, by: string }
  };

  summary: {
    shippingDocuments: {
      pending: number,
      approved: number,
      declined: number,
    },
    legalDocuments: {
      pending: number,
      approved: number,
      declined: number,
    },
  };

  billing?: {
    preAuthAmount: number,
    transactionId: string,
  };

  invoice?: {
    total?: number;
    date?: Timestamp;
  }

}

export type JobSummary = Pick<Job, "summary">

type JobStatus = 'draft' | 'pending' | 'submitted' | 'completed' | 'withdrawn'

export interface invoice {
  id: string;
  date: Timestamp;
  profileId: string;
  documentCount: number;
  costPerDocument: number;
  amount: number;
}

export interface InvoiceItems {
  description: string;
  quantity: number;
  cost: number;
}

