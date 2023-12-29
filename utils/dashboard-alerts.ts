import { Timestamp } from '@firebase/firestore'

export type DashboardAlert = {
  id?: string
  partnerCode?: string
  start: Timestamp | null,
  end: Timestamp | null,
  type: 'info' | 'warning' | 'error' | 'success'
  title: string
  message: string
  published: boolean,
  updates: { user: string, timestamp: Date }[]
}

