import { Timestamp } from "@firebase/firestore-types";

export interface Contact {
  contactId: string;
  firstName: string;
  lastName: string;
  title?: string;
  email: string;
  tel: string;
}

export type CompanyProfile = {
  partnerCode: string;
  profileId: string;
  events: {
    created?: { by: string, date: Timestamp };
    lastUpdated?: { by: string, date: Timestamp },
    submitted?: null | { by: string, date: Timestamp }
    approved?: null | { by: string, date: Timestamp }
    declined?: null | { by: string, date: Timestamp, reasons: string[] }
  },
  associates: string[];
  company: string;
  dba: null | { name: string, url: string | null };
  website: string;
  registeredAddress: string;
  operationsAddress: string;
  contacts: Contact[];
  businessLicenseNumber: string;
  businessLicenseExpiry: string;
  businessLicenseURL: string;
  manufacturingLicenseNumber: string;
  manufacturingLicenseExpiry: string;
  manufacturingLicenseURL: string;
  goodManufacturingLicenseURL: string;
  isChamberMember: boolean;
  isManufacturer: boolean;
  chamberMembershipNumber: string;
  chamberMembershipExpiry: string;
  authorizedUsers: string[];

  //if agent is null, then the profile is a company / client
  //if agent is not null, then the profile is an agent
  agent: null | { certificateFee: null | number },

  //if agentId is null, then the profile is a company
  //if agentId is not null, then the profile is an client
  agentId: null | string,

  status: ProfileStatus
}

export type CompanyProfiles = Record<string, CompanyProfile>
export type ProfileStatus = "pending" | "approved" | "declined";
export type ProfileType = "company" | "agent" | "client";

export type ProfileNote = {
  id: string;
  sourceId: string;
  date: Timestamp;
  user: string;
  note: string;
}

export type ProfileNotes = {
  [key: string]: ProfileNote
}