---
title: "Hello World"
---

After finally doing the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/) and making this blog with the stack I'm sold on it's utility. It's clearly the best way for me to make a static website that can easily consume and display content written in Markdown. 

There is a lot more I need to learn but here is [the code](https://github.com/harrisonmalone/harrisonmalone-gatsby) as it currently stands. The simplistic design takes inspiration from [this site](https://tonsky.me/) as I wanted something extremely focussed on just words and code snippets. 

I've never actually done a post with code snippets before so here goes!

I actually Gatsby might come in handy at Coder Academy just after a brief foray into React. I love the CLI that gives you easy access to boiler plate as well as a more fully fledged `package.json` over `create-react-app`. 

You very quickly get up and running using pages to make actual web pages which is a much easier transition coming into a component based world.

This is my `index.jsx` page which is at the root of this site.

```jsx
export default props => {
  return (
    <Layout>
      <Main />
      <Articles data={props.data} />
    </Layout>
  )
}
```

It wraps all of my components in a `<Layout />` which is handy for setting up things like a container for the entire site as well as metadata. 

I then break up the two parts of my home page into their associated components and pass some data so my articles can display on the [homepage](/).

Speaking of data, Gatsby has been an awesome entry point to GraphQL. The way I've used GraphQL in this project is in talking to my markdown files that I've written. I can access things like the transformed HTML, frontmatter and file birth time and use this data in the JSX.

The downside of Gatsby (right now) is understanding how some of the more complex config is done such as using the `createPages` and `onCreateNode` functions. To setup dynamic slugs will take little but more practice but I'm sure with repetition it will get easier.