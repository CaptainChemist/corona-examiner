import * as React from "react"
import { useFetchAggregatedData } from "../utils/useFetch"
import { Loading } from "./loading"
import { filter, sumBy, reduce } from "lodash"
import { CountryMap } from "../utils/types"

export const statsArray = ["Confirmed", "Deaths", "Recovered", "Active"]

export const GlobalStats = ({
  tooltipContent,
}: {
  tooltipContent: CountryMap
}) => {
  const [result, loading] = useFetchAggregatedData(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv",
    {}
  )
  if (loading) {
    return (
      <div className="w-1/4">
        <Loading />
      </div>
    )
  }

  const aggConfirmed = reduce(
    statsArray,
    (memo, curr) => ({
      ...memo,
      [curr]: sumBy(result, o => o[curr]),
    }),
    {}
  )

  const { ISO_A3, NAME } = tooltipContent
  const covidAggregatedData =
    filter(result, {
      ISO3: ISO_A3,
    })[0] || {}

  const { Country_Region } = covidAggregatedData

  const thArray = Country_Region ? ["Kind", "Total", NAME] : ["Kind", "Total"]
  const tdArray = statsArray.map(attr =>
    Country_Region
      ? [attr, aggConfirmed[attr], covidAggregatedData[attr]]
      : [attr, aggConfirmed[attr]]
  )
  return (
    <div className="w-1/4 text-left">
      <h1 className="py-2 font-bold">Total affected people</h1>
      <table className="table-auto text-sm">
        <thead>
          <tr>
            {thArray.map(i => (
              <th className="px-4 py-2" key={`${i}-head`}>
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tdArray.map((row, i) => (
            <tr key={`${i}-row`}>
              {row.map(col => (
                <td className="border px-2 py-2" key={`${i}-row-${col}`}>
                  {col.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {ISO_A3 && !Country_Region ? (
        <p className="py-2">No country data for {NAME}.</p>
      ) : null}
    </div>
  )
}
