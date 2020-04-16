import { csvArray } from "./csvArray"
import { filter, reduce, forOwn } from "lodash"
import { statsArray } from "../components/global-stats"
import { lookupKeys } from "./fetchLookupKey"

export const caseTypes = ["CONFIRMED", "DEATHS"]
export const plotFormatTypes = ["NORMAL", "LOG"]
export const percentTypes = ["NORMAL", "CPM"]

const filterEmptyObjs = (collection: {}[]) =>
  filter(collection, o => o.Country_Region !== "")

export const processOneCOVIDTimeSeries = (text: string) => {
  const formattedText = `${text}`
  const casesJSON = csvArray(formattedText)
  const dateArray = []
  forOwn(casesJSON[0], (_value, key) => {
    if (key.search(/[0-9]*\/[0-9]*\/[0-9]*/i) === 0) {
      dateArray.push(key)
    }
  })

  const result = reduce(
    percentTypes,
    (percentMemo, percentCurrent) => ({
      ...percentMemo,
      [`${percentCurrent}`]: dateArray.map(currentDate =>
        reduce(
          casesJSON,
          (countryMemo, currentCountry) => {
            const parsedCurrentMetric = parseInt(currentCountry[currentDate])
            const { iso3, Population } = lookupKeys({
              Province_State: currentCountry["Province/State"],
              Country_Region: currentCountry["Country/Region"],
            })
            const currentCountryPop = parseInt(Population)
            const currentMetric =
              percentCurrent === "CPM"
                ? currentCountryPop
                  ? (parsedCurrentMetric / currentCountryPop) * 1000000
                  : parsedCurrentMetric
                : parsedCurrentMetric
            const previousData = countryMemo[iso3]
            const isoMetric = {}
            if (iso3 !== "") {
              if (previousData) {
                isoMetric[iso3] = currentMetric + previousData
              } else {
                isoMetric[iso3] = currentMetric
              }
            }

            return {
              ...countryMemo,
              ...isoMetric,
              date: currentDate,
            }
          },
          {}
        )
      ),
    }),
    {}
  )
  return result
}

export const processCOVIDAggregatedData = (text: string) => {
  const formattedText = `${text}`
  const textCollection = csvArray(formattedText)
  return filterEmptyObjs(textCollection).map(o =>
    reduce(
      statsArray,
      (memo, current) => ({
        ...o,
        ...memo,
        [current]: parseInt(o[current]),
      }),
      {}
    )
  )
}
