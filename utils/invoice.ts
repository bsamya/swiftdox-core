export type Invoice = {
  number: string
  date: string
  dueDate: string
  items: InvoiceItem[]
  total: number
  amountDue: number
  amountPaid: number
  status: "pending" | "paid";
}

export type InvoiceItem = {
  item: string,
  total: number
  description?: string,
  quantity?: number,
  unitPrice?: number,
}
