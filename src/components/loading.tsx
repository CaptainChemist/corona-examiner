import * as React from "react"
import loadingSvg from "../images/loading.svg"

export const Loading = () => (
  <img
    className="text-center"
    style={{
      filter: `invert(40%) sepia(26%) saturate(900%) hue-rotate(220deg) brightness(92%) contrast(95%)`,
      margin: "auto",
      width: "20%",
      paddingTop: "25%",
    }}
    src={loadingSvg}
    alt="loading image"
  />
)
