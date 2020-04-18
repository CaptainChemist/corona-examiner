import { csvArray } from "./csvArray"
import { filter, reduce, forOwn, cloneDeep } from "lodash"
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

  const countryPopulationData = {}

  const NORMAL = dateArray.map((currentDate, dateIndex) =>
    reduce(
      casesJSON,
      (countryMemo, currentCountry) => {
        const parsedCurrentMetric = parseInt(currentCountry[currentDate])
        const { iso3, Population } = lookupKeys({
          Province_State: currentCountry["Province/State"],
          Country_Region: currentCountry["Country/Region"],
        })

        if (dateIndex === 0) {
          const prevPopulation = countryPopulationData[iso3] || 0
          const newPopulation = parseInt(Population) || 0
          countryPopulationData[iso3] = prevPopulation + newPopulation
        }

        const previousData = countryMemo[iso3] || 0
        const isoMetric = {}

        if (iso3 !== "") {
          if (previousData) {
            //CPM data we will later divide by the population, for now we aggregaate
            isoMetric[iso3] = parsedCurrentMetric + previousData
          } else {
            isoMetric[iso3] = parsedCurrentMetric
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
  )
  const result = { NORMAL, CPM: cloneDeep(NORMAL) }

  // Now we need to correct the CPM data to divide by the population
  result.CPM.map(oneDate => {
    forOwn(countryPopulationData, (population, countryKey) => {
      oneDate[countryKey] = (oneDate[countryKey] / population) * 1000000
    })
  })

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
