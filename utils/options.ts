//application/job decline options
export type Decline = {
  declineId: string;
  partnerCode: string;
  category: "chamber" | "profile" | "nusacc";
  reason: string;
};


//address book
export type AddressType = "mailing" | "buyer" | "consignee";

export type Address = {
  profileId: string;
  addressId: string;
  addressType: AddressType;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  country: string;
  address: string;
  isDeleted: boolean;
};

//product store
export interface Product {
  productId: string;
  profileId: string;
  productName: string;
}
