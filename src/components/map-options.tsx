import * as React from "react"
import { PlotOptions } from "../utils/types"
import {
  caseTypes,
  plotFormatTypes,
  percentTypes,
} from "../utils/processCOVIDData"
import { capitalizeText } from "../utils/capitalizeText"

const Selector = ({
  title,
  currValue,
  setPlotOptions,
  name,
  allTypes,
}: {
  title: string
  currValue: string
  setPlotOptions: React.Dispatch<React.SetStateAction<PlotOptions>>
  name: string
  allTypes: string[]
}) => (
  <tr>
    <td className="border px-2 py-2">{title}</td>
    <td className="border px-2 py-2">
      <select
        className="block w-full bg-gray-200 border border-gray-200 text-gray-700"
        name={name}
        value={currValue}
        onChange={e => {
          const { value } = e.target
          setPlotOptions(currState => ({
            ...currState,
            [name]: value.toUpperCase(),
          }))
        }}
      >
        {allTypes
          .map(i => i.toUpperCase())
          .map(item => (
            <option key={item} value={item}>
              {capitalizeText(item)}
            </option>
          ))}
      </select>
    </td>
  </tr>
)

export const MapOptions = ({
  plotOptions,
  setPlotOptions,
}: {
  plotOptions: PlotOptions
  setPlotOptions: React.Dispatch<React.SetStateAction<PlotOptions>>
}) => {
  return (
    <div className="w-1/4 text-left">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-left px-2 py-4" colSpan={2}>
              Plotting options
            </th>
          </tr>
        </thead>
        <tbody>
          <Selector
            title="Case types"
            currValue={plotOptions.resultType}
            name={"resultType"}
            setPlotOptions={setPlotOptions}
            allTypes={caseTypes}
          />
          <Selector
            title="Y-axis scale"
            currValue={plotOptions.plotFormatType}
            name={"plotFormatType"}
            setPlotOptions={setPlotOptions}
            allTypes={plotFormatTypes}
          />
          <Selector
            title="Total vs. Per million"
            currValue={plotOptions.percentType}
            name={"percentType"}
            setPlotOptions={setPlotOptions}
            allTypes={percentTypes}
          />
        </tbody>
      </table>
    </div>
  )
}
