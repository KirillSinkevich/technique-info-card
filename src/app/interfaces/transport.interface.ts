export interface ITransport {
  cardType: number,
  type: string,
  name: string,
  numberplate: string,
  mileage: number,
  brand: string,
  model: string,
  serialNumber: number,
  yearOfCreate: number,
  unit: number,
  sample: number,
  additionalInfo?: string,
}
