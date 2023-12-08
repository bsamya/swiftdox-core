export type Partner = {
  code: string,
  name: string,
  address: string,
  logo: string,
  url: string,
  customerService: {
    email: string,
    phone: string
  },
  associates: Association[]
  certificates: {
    [key: string]: {
      isActive: boolean,
      options: {
        [key: string]: CertificateOptions
      }
    }
  }
  authenticationFees: {
    regular: number,
    member: number
  }
  isActive: boolean;
  isManagedAccount?: boolean;
}

export type CertificateOptions = {
  isActive: boolean,
  revenue: {
    certificate: {
      regular: number,
      member: number
    },
    scan?: number,
    mailing?: { type: string, charge: number },
    misc?: number
  },
  deductions: {
    service: number,
    processing?: number,
    misc?: number
  }
}

interface PartnerUsers {
  partnerId: string;
  id: string;
  firstName: string;
  lastName: string;
  title?: string;
  email: string;
  tel: string;
  notes?: string;
  isPrimary: boolean;
  isBilling: boolean;
  gender: "Male" | "Female";
  permissions: {
    isAdministrator: boolean;
    isNotary: boolean;
    isSignatory: boolean;
    canApproveProfiles: boolean;
    canApproveApplications: boolean;
  };
  signature?: string;
}


export type Partners = Record<string, Partner>;

export type Association = { id: string, name: string, url: string, logo: string }