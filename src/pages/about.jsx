import React from "react"
import Layout from "../components/layout"
import ArticleLayout from "../components/article-layout"

const About = () => {
  return (
    <Layout>
      <ArticleLayout>
        <div>
          <p>
            I'm a teacher and developer working{" "}
            <a href="https://twitter.com/CoderAcademy_au">@CoderAcademy</a>.
            I write Ruby and JavaScript. I've worked directly with around 100
            students leading classes and assisting with content development. I
            get excited when I have the chance to tinker with things.
          </p>
          <p>
            I'm an Apple nerd. I listen to technology podcasts like{" "}
            <a href="https://atp.fm/">Accidental Tech Podcast</a> and{" "}
            <a href="https://www.relay.fm/connected">Connected</a>. I love
            researching and organizing my music. I could listen to{" "}
            <a href="https://en.wikipedia.org/wiki/Animal_Collective">
              Animal Collective
            </a>
            ,{" "}
            <a href="https://en.wikipedia.org/wiki/The_Beatles">
              The Beatles
            </a>{" "}
            and{" "}
            <a href="ttps://en.wikipedia.org/wiki/Tame_Impala">
              Tame Impala
            </a>{" "}
            all day.
          </p>
          <p>
            I do a bunch of running tending to hit around 40k a week. I post all
            my runs up on{" "}
            <a href="https://www.strava.com/athletes/24750713">Strava</a>{" "}
            and compete for{" "}
            <a href="http://apsoc.net.au/caulfield-grammarians/">
              Caulfield Grammarians
            </a>
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
