import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="max-w-6xl mx-auto text-center p-8">
    <Link to="/">
      <StaticImage
        src="../images/logo-light.png"
        width={250}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt={siteTitle}
      />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `bolubutter.id | baked specially for you`,
}

export default Header
