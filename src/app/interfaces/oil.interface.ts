export interface IOil {
  cardType: number,
  type: string,
  condition: string,
  serialNumber: string,
  getData: string,
  departureDate: string,
  additionalInfo?: IOilAdditionalInfo,
}

interface IOilAdditionalInfo {
  labNumber: string,
  addedValue: number,
  accessory: string,
  info: string,
  processingSpeed: number
}
