export type PaymentFormProps = {
  invoiceAmount: number;
  invoiceNumber: string;
  customerId: string;
  company: string;
}

export type ResponseAlert = {
  show: boolean,
  type: "success" | "error" | "warning",
  title: string,
  messages: string[]
}

export type PaymentResponse = {
  resultCode: null | 'Error' | 'Ok'
  transactionId: string | null
  messages: string[]
  debug?: any
}