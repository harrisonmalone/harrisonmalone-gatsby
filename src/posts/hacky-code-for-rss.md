---
title: "Hacky Code for RSS"
date: "2020-07-07T13:16:02.933Z"
---

I implemented some pretty bad code into this Gatsby app in order to get the time stamps working properly for my RSS feed. Essentially now I'll feed dates that look like this

```yml
date: "2020-07-07T13:12:45.988Z"
```

into my markdown frontmatter so that my feed reader NetNewsWire displays the correct time for when I published the post. I've also had to do some dodgy `.substring` and `.includes` to ensure my other dates weren't effected. See this:

```jsx
<ArticleLayout
  title={frontmatter.title}
  slug={fields.slug}
  date={frontmatter.date.includes("T") ? frontmatter.date.split("T")[0] : frontmatter.date}
>
```

It works! I ain't touching it no more!