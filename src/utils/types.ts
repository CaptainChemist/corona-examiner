export enum ResultType {
  CONFIRMED = "CONFIRMED",
  DEATHS = "DEATHS",
}

export enum PlotFormatType {
  NORMAL = "NORMAL",
  LOG = "LOG",
}

export enum PercentTypes {
  NORMAL = "NORMAL",
  CPM = "CPM",
}

export interface PlotOptions {
  resultType: ResultType
  plotFormatType: PlotFormatType
  percentType: PercentTypes
}
export interface CountryMap {
  ISO_A3?: string
  NAME?: string
  color?: string
}
