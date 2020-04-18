import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex-1 w-full max-w-6xl px-4 py-2 mx-auto md:px-8 md:py-4">
          {props.children}
        </main>
        <footer className="bg-purple-700">
          <nav className="flex justify-between max-w-6xl p-4 mx-auto text-sm md:p-8">
            <div>
              <p className="text-white">
                Source{" "}
                <a href="https://github.com/CSSEGISandData/COVID-19">
                  JHU CSSE
                </a>
              </p>
              <p className="text-white">
                <a href="https://www.codemochi.com/tos/">TOS</a>{" "}
                <a href="https://www.codemochi.com/privacy-policy/">Privacy</a>{" "}
                <a href="https://www.codemochi.com/cookie-policy/">Cookie</a>
              </p>
            </div>
            <div>
              <p className="text-white">
                Created with 💜 by{" "}
                <a href="https://www.codemochi.com">Codemochi</a>
              </p>
              <p className="text-white">
                Source code available on{" "}
                <a href="https://github.com/CaptainChemist/corona-examiner">
                  Github
                </a>
                .
              </p>
            </div>
          </nav>
        </footer>
      </div>
    )}
  />
)

interface LayoutProps {
  children: any
}

export default Layout
