export default props => {
  const data = [
    {
      "2020": [],
    },
    {
      "2019": [],
    },
  ]
  const sortedArticles = props.data.allMarkdownRemark.edges.sort(
    (a, b) => {
      return Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date)
    }
  )
  console.log(sortedArticles)
  const articles = sortedArticles.map(article => {
    const date = article.node.frontmatter.date
    const splitDate = article.node.frontmatter.date.split("-")
    const shortDate = `${splitDate[1]}-${splitDate[2]}`
    return {
      title: article.node.frontmatter.title,
      date: date,
      slug: article.node.fields.slug,
      shortDate: shortDate,
    }
  })
  // will need to change this code
  articles.forEach(article => {
    if (article.date.split("-").includes("2020")) {
      data[0]["2020"].push(article)
    } else {
      data[1]["2019"].push(article)
    }
  })
  return data
}
