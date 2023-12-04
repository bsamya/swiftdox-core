type fn = (i: string) => void;

export type cgFunctions = {
  setInvoice: fn
  removeInvoice: fn
  setMfgStatement: fn
  removeMfgStatement: fn
  setGmpStatement: fn
  removeGmpStatement: fn
  setMailingLabel: fn
  submitApplication: () => void
  removeMailingLabel: () => void
}