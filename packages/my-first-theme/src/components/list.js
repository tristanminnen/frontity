import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source.post[item.id]
        return (
          <Link link={post.link} key={post.id}>
            {post.title.rendered}
          </Link>
        )
      })}
    </Items>
  )
}

export default connect(List)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`