import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <div id="about-page">
        <h1>About Page</h1>
        <p>
          Hello, my name is akiko and this is my about me. I am super awesome. I
          climb well, I am a returning student at sfsu. I love to be
          adventurous, but i also enjoy being a homebody!
        </p>
        <p>
          My default route is named <code>about</code>, link to me with `
          <Link to={routes.about()}>About</Link>`
        </p>
      </div>
    </>
  )
}

export default AboutPage
