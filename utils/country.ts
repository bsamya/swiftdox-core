type AuthenticationType = "apostille" | "legalization" | null | undefined;

export interface Country {
  name: string;
  code: string;
  authenticationType: AuthenticationType;
  authenticationFees: number;
  authenticationServiceFees: number;
  regions: null | string[]

  nusacc: boolean;
  nusaccFees: number;

  nusaccProcessingTime?: number;
  notaryFees: number;
  notaryProcessingTime?: number;
  sosFees: number;
  sosProcessingTime?: number;
  dosFees: number;
  dosProcessingTime?: number;
  embassyFees: number;
  embassyProcessingTime?: number;
  serviceFees: number;
  processingTime?: number;
}


export type Countries = {
  [key: string]: Country
}

