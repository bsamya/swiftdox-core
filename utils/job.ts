import { Timestamp } from '@firebase/firestore';

type Result = {
  approved?: boolean;
  declined?: string[]
}

export interface JobDocument {
  id: string;
  documentType: null | 'legal' | 'shipping';
  approved?: boolean;
  declined?: false | string[];
}

export interface LegalDocument {
  id: string;
  result: undefined | Result;
  approved?: boolean;
  declined?: false | string[];
  documentType: 'legal';
  documentTypeId: string | null
  attachment: string | null
}

export interface ShippingDocument {
  id: string;
  result: undefined | Result;
  documentType: 'shipping';
  documents: { [key: string]: number };
  attachments: string[];
}

export enum JobStatus {
  draft = 'draft',
  pending = 'pending',
  submitted = 'submitted',
  completed = 'completed',
  withdrawn = 'withdrawn',
}

export enum JobEvent {
  created = 'created',
  lastUpdated = 'lastUpdated',
  submitted = 'submitted',
  completed = 'completed',
  withdrawn = 'withdrawn',
}


export type Job = {
  jobId: string;
  profileId: string;
  agentId: string | null;
  reference: string;
  country: string;
  region?: string;
  status: JobStatus
  items: (ShippingDocument | LegalDocument)[];
  events: { [key in JobEvent]?: { date: Timestamp, by: string } };

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

    billing?: {
      preAuthAmount: number,
      transactionId: string,
    }
    invoice?: {
      qty: number,
      fee: number,
      total: number
    }
  }
}

export type JobSummary = Pick<Job, "summary">

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
