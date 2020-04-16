import { scaleSymlog } from "d3-scale"
import * as React from "react"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts"

import { CountryMap, PlotOptions } from "../utils/types"
import { useFetchTimeSeries } from "../utils/useFetch"
import { Loading } from "./loading"
import { capitalizeText } from "../utils/capitalizeText"

const Plot = ({
  selectedCountries,
  plotOptions,
}: {
  selectedCountries: CountryMap[]
  plotOptions: PlotOptions
}) => {
  const [allConfirmed, ConfirmedLoading] = useFetchTimeSeries(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    {}
  )
  const [allDeaths, DeathsLoading] = useFetchTimeSeries(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
    {}
  )

  const { plotFormatType, resultType, percentType } = plotOptions

  const currentCase =
    resultType === "CONFIRMED"
      ? allConfirmed
      : resultType === "DEATHS"
      ? allDeaths
      : []

  if (selectedCountries.length < 1) {
    return (
      <div className="w-3/4 text-center">
        <p>No countries are selected, why not select a few to compare them?</p>
      </div>
    )
  }

  if (ConfirmedLoading) {
    return (
      <div className="w-3/4">
        <Loading />
      </div>
    )
  }

  const YLabel = `${capitalizeText(resultType)} ${
    percentType === "NORMAL" ? "(people)" : "(cases per million)"
  }`

  const formatTick = i => {
    if (i > 1000000) {
      return `${i / 1000000} mil`
    }
    if (i > 1000) {
      if (percentType === "CPM") {
        return `${i} cpm`
      }
      return `${i / 1000}k`
    }
    if (percentType === "CPM") {
      return `${i} cpm`
    }
    return i.toString()
  }

  return (
    <div className="w-3/4">
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          data={currentCase[percentType]}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          {plotFormatType === "LOG" ? (
            <YAxis scale={scaleSymlog()} tickFormatter={formatTick}>
              <Label
                value={YLabel}
                angle={-90}
                position="left"
                offset={10}
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
          ) : (
            <YAxis tickFormatter={formatTick}>
              <Label
                value={YLabel}
                angle={-90}
                position="left"
                offset={10}
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
          )}
          <Tooltip />
          <Legend />
          {selectedCountries.map(({ ISO_A3, NAME, color }: CountryMap) => (
            <Line
              type="monotone"
              key={ISO_A3}
              name={NAME}
              dataKey={ISO_A3}
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Plot
