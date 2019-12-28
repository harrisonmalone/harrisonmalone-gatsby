import React from "react"
import Layout from "../components/layout"
import ArticleLayout from "../components/article-layout"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <ArticleLayout>
        <div>
          <p>
            I'm a teacher and developer working{" "}
            <Link to="https://twitter.com/CoderAcademy_au">@CoderAcademy</Link>.
            I write Ruby and JavaScript. I've worked directly with around 100
            students leading classes and assisting with content development. I
            get excited when I have the chance to tinker with things.
          </p>
          <p>
            I'm an Apple nerd. I listen to technology podcasts like{" "}
            <Link to="https://atp.fm/">Accidental Tech Podcast</Link> and{" "}
            <Link to="https://www.relay.fm/connected">Connected</Link>. I love
            researching and organizing my music. I could listen to{" "}
            <Link to="https://en.wikipedia.org/wiki/Animal_Collective">
              Animal Collective
            </Link>
            ,{" "}
            <Link to="https://en.wikipedia.org/wiki/The_Beatles">
              The Beatles
            </Link>{" "}
            and{" "}
            <Link to="ttps://en.wikipedia.org/wiki/Tame_Impala">
              Tame Impala
            </Link>{" "}
            all day.
          </p>
          <p>
            I do a bunch of running tending to hit around 40k a week. I post all
            my runs up on{" "}
            <Link to="https://www.strava.com/athletes/24750713">Strava</Link>{" "}
            and compete for{" "}
            <Link to="http://apsoc.net.au/caulfield-grammarians/">
              Caulfield Grammarians
            </Link>
            . I have a border collie named Tilly{" "}
            <span role="img" aria-label="doggy">
              🐶
            </span>
            .
          </p>
        </div>
      </ArticleLayout>
    </Layout>
  )
}

export default About
