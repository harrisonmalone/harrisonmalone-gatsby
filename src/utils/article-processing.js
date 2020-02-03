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
    (a, b) =>
      Date.parse(b.node.parent.birthTime) - Date.parse(a.node.parent.birthTime)
  )
  const articles = sortedArticles.map(article => {
    const date = article.node.parent.birthTime
    const splitDate = article.node.parent.birthTime.split("-")
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
