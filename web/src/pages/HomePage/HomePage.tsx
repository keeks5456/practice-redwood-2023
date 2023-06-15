import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header>
        <h1>Redwood Blog Home</h1>
        <p>Hello! this is my first generated page! this is so dope!</p>
        <p>
          Check out my about page here: `<Link to={routes.about()}>About</Link>`
        </p>
      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage
