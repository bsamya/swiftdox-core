import { Timestamp } from "firebase/firestore";

export type Timeline = {
  id: string
  user: string
  date: Timestamp
  trigger: 'client' | 'partner'
  source: 'job' | 'profile' | 'application'
  sourceId: string
  action: 'submitted' | 'approved' | 'declined' | 'completed' | 'updated' | 'created' | 'deleted' | 'withdrawn' | 'status' | 'reset' | 'settings'
  message: string[] | string | null
}

export type TimelineSource = Timeline['source']
export type TimelineTrigger = Timeline['trigger']
export type TimelineAction = Timeline['action'] 