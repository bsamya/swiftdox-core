import { Timestamp } from "@firebase/firestore-types";

export type User = {
  id: string;
  partnerCode: string;
  name: string;
  title: string
  email: string;
  tel: string;
  sms?: { number: string, date: Timestamp } | null;
  permissions: {
    manageUsers: Boolean;
    manageProfiles: Boolean;
    manageJobs: Boolean;
    manageApplications: Boolean;
  }
  signature: null | string,
  isDeleted: Boolean;
  isActive: Boolean;
}