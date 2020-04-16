import * as React from "react"

import { GlobalStats } from "../components/global-stats"
import Layout from "../components/layout"
import { Loading } from "../components/loading"
import MapChart from "../components/map-chart"
import { MapOptions } from "../components/map-options"
import Plot from "../components/plot"
import SEO from "../components/seo"
import { CountryMap } from "../utils/types"
import {
  PercentTypes,
  PlotFormatType,
  PlotOptions,
  ResultType,
} from "../utils/types"

const initialCountries: CountryMap[] = []
const initialTooltip: CountryMap = {}
const initialPlotOptions: PlotOptions = {
  resultType: ResultType.CONFIRMED,
  plotFormatType: PlotFormatType.NORMAL,
  percentType: PercentTypes.NORMAL,
}

const IndexPage = () => {
  const [tooltipContent, setTooltipContent] = React.useState(initialTooltip)
  const [selectedCountries, setSelecteCountries] = React.useState(
    initialCountries
  )

  const [plotOptions, setPlotOptions] = React.useState(initialPlotOptions)

  if (!selectedCountries) {
    return (
      <div className="w-3/4">
        <Loading />
      </div>
    )
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex mb-4">
        <MapChart
          setTooltipContent={setTooltipContent}
          setSelectedCountries={setSelecteCountries}
          selectedCountries={selectedCountries}
        />
        <GlobalStats tooltipContent={tooltipContent} />
      </div>
      <div className="flex mb-4">
        <MapOptions plotOptions={plotOptions} setPlotOptions={setPlotOptions} />
        <Plot plotOptions={plotOptions} selectedCountries={selectedCountries} />
      </div>
    </Layout>
  )
}

export default IndexPage
