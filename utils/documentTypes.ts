

export interface DocType {
  documentTypeId: string,
  abbreviation: string,
  label: string,
  variants: {
    federal: boolean,
    state: boolean,
    other: boolean,
  },
  isShippingDocument: boolean
  isArchived: boolean,
  isDeleted?: boolean,
  alerts?: DocAlert[],

}

export interface DocAlert {
  alertId: string,
  type: 'warning' | 'error' | 'success' | 'info',
  message: string,
  countrySpecific: boolean,
  countries?: string[],
}

export type DocTypes = {
  [key: string]: DocType
}

