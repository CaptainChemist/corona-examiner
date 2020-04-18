import { filter } from "lodash"
import { darken, lighten } from "polished"
import * as React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps"
import ReactTooltip from "react-tooltip"

import {
  baseColor,
  colorMap,
  defaultColor,
  selectColor,
  strokeColor,
} from "../utils/colorMap"
import { lookupKeyByISO } from "../utils/fetchLookupKey"
import { CountryMap } from "../utils/types"

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const MapChart = ({
  setTooltipContent,
  setSelectedCountries,
  selectedCountries,
}: {
  setTooltipContent: React.Dispatch<React.SetStateAction<string>>
  setSelectedCountries: React.Dispatch<React.SetStateAction<CountryMap[]>>
  selectedCountries: CountryMap[]
}) => {
  React.useEffect(() => {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 100)
  })
  return (
    <>
      <div className="w-3/4">
        <ComposableMap
          projectionConfig={{ scale: 205 }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl} disableOptimization>
              {(geos, proj) =>
                geos.map(geo => {
                  const { ISO_A3, NAME } = geo.properties
                  const isSelected =
                    selectedCountries
                      .map(({ ISO_A3 }) => ISO_A3)
                      .indexOf(ISO_A3) !== -1

                  const selectedCountry = filter(selectedCountries, {
                    ISO_A3,
                  })[0]
                  return (
                    <React.Fragment key={NAME}>
                      <Geography
                        data-tip={geo.properties.NAME}
                        geography={geo}
                        projection={proj}
                        onMouseEnter={() => {
                          const { NAME, ISO_A3 } = geo.properties
                          setTooltipContent({ NAME, ISO_A3 })
                        }}
                        onMouseUp={() => {}}
                        onMouseDown={() => {
                          if (isSelected) {
                            return setSelectedCountries(item =>
                              filter(item, e => e.ISO_A3 !== ISO_A3)
                            )
                          } else {
                            const hasCovidDataMatch = lookupKeyByISO(ISO_A3)

                            if (
                              colorMap.length > selectedCountries.length &&
                              hasCovidDataMatch
                            ) {
                              return setSelectedCountries(item => [
                                ...item,
                                {
                                  ISO_A3,
                                  NAME,
                                  color: selectColor(item),
                                },
                              ])
                            }
                          }
                        }}
                        style={{
                          default: {
                            fill: isSelected
                              ? `${selectedCountry.color}`
                              : defaultColor,
                            stroke: strokeColor,
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          hover: {
                            fill: isSelected
                              ? darken(0.2, selectedCountry.color)
                              : darken(0.2, baseColor),
                            stroke: strokeColor,
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          pressed: {
                            fill: darken(0.2, baseColor),
                            stroke: strokeColor,
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                        }}
                      />
                    </React.Fragment>
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip backgroundColor={baseColor} />
      </div>
    </>
  )
}

export default React.memo(MapChart)
