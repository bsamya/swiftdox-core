type Log = {
  type: 'job' | 'application',
  id: string,
  source: 'client' | 'partner' | 'admin';
  status: ApplicationStatus;
  date: Timestamp;
  user: string;
  comment?: string;
  message?: string
}
