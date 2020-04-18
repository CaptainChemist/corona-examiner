import { Link } from "gatsby"
import * as React from "react"
import logo from "../images/icon.png"
import twitter from "../images/twitter.png"

const Header = (props: HeaderProps) => (
  <header className="bg-purple-700">
    <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
      <h1 className="flex items-center text-white no-underline">
        <a href="https://codemochi.com">
          <img className="h-6 pr-2" src={logo} />
        </a>
        <Link to="/">{props.siteTitle}</Link>
      </h1>

      <a
        href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fcoronaexaminer.codemochi.com%2F&ref_src=twsrc%5Etfw&text=Track%20and%20compare%20the%20spread%20of%20coronavirus%20between%20different%20countries%20:%20&tw_p=tweetbutton&url=https%3A%2F%2Fcoronaexaminer.codemochi.com&via=codemochi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-blue-500 hover:bg-blue-700 rounded-md p-1">
          <img className="h-3 pr-1 pl-1 inline-block" src={twitter} />
          <p className="inline-block text-white text-sm pr-1">Tweet</p>
        </div>
      </a>
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
