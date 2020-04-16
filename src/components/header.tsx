import { Link } from "gatsby"
import * as React from "react"

const Header = (props: HeaderProps) => (
  <header className="bg-purple-700">
    <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
      <h1 className="flex items-center text-white no-underline">
        <Link to="/">{props.siteTitle}</Link>
      </h1>
    </div>
  </header>
)

interface HeaderProps {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
