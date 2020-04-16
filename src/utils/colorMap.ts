import { CountryMap } from "./types"
import { filter, includes, range } from "lodash"
import { adjustHue, setSaturation } from "polished"

const hueDifferentials = range(0, 360, 36)
export const baseColor = "#765aa6"
export const strokeColor = "#607D8B"
export const defaultColor = "#ECEFF1"

export const colorMap = hueDifferentials.map((degree, i) => {
  const newColor = adjustHue(degree, baseColor)
  // Alternate the saturation between adjacent hues to further differentiate the colors
  if (i % 2 == 0) {
    return setSaturation(0.8, newColor)
  }
  return newColor
})

export const selectColor = (selectedCountries: CountryMap[]) => {
  const countryColorsInUse = selectedCountries.map(o => o.color)
  const colorsInUse = filter(
    colorMap,
    color => !includes(countryColorsInUse, color)
  )

  if (colorsInUse.length > 0) {
    return colorsInUse[0]
  }
  return baseColor
}
