import { Timestamp } from "firebase/firestore";

export type EventLog = {
  trigger: 'client' | 'partner'
  date: Timestamp
  user: string
  source: 'job' | 'profile' | 'application'
  id: string
  action: 'submitted' | 'approved' | 'declined' | 'completed'
  message: string
}