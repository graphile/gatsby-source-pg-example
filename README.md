<p align="center">
  <a href="https://www.graphile.org/postgraphile/">
    <img alt="PostGraphile" src="https://www.graphile.org/images/postgraphile.optimized.svg" width="60" />
  </a>
  <img alt="Graphile Heart" src="https://www.graphile.org/images/graphile.optimized.svg" width="60" />
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

<h1 align="center">
  gatsby-source-pg example
</h1>

This repo is an example of using gatsby-source-pg to pull in data from PostgreSQL into Gatsby.

To start, clone this repository down, make sure you're running a local
PostgreSQL database server (and have admin privileges), then:

```
yarn
./db/reset.sh
yarn develop
```

We create (or reset) the `gatsby_example` Postgres DB for you, and seed it with some simple data.

## Helpful links

- [Gatsby documentation](https://www.gatsbyjs.org/)
- [gatsby-source-pg](https://github.com/graphile/gatsby-source-pg/)
- [PostGraphile documentation](https://www.graphile.org/postgraphile/)
