export type Certificate = {
  type: string,
  label: string,
  mediaType: 'physical' | 'digital',
  options: string[]
}

export type Certificates = {
  [key: string]: Certificate
}

export type Language = { value: string, title: string }
export type Languages = {
  [key: string]: Language
}

