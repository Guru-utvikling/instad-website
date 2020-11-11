/*
import React from "react"
import { graphql} from 'gatsby'
import styled from "styled-components"
import Img from 'gatsby-image'
const ArticleWrapper = styled.article`
  padding:5rem 20rem 0 20rem;
`
const ArticleContentWrapper = styled.div`
  p{
    text-align:justify;
    line-height:25px;
  }
`
export default ({ data }) => {
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <ArticleWrapper >
        {data.datoCmsArticle.postContent.map( item => {
          return(
            <ArticleContentWrapper>
              {
                item.model.apiKey === 'heading' &&
                  <h1>{item.headingContent}</h1>
              }
              {
                item.model.apiKey === 'paragraph' &&
                  <p>{item.paragraphContent}</p>
              }
              {
                item.model.apiKey === 'post_image' &&
                <Img fluid={item.postImageContent.fluid} />
              }
            </ArticleContentWrapper>
          )
        })}
      </ArticleWrapper >
      
    </div>
  )
}
export const query = graphql`
query MyQuery($slug: String!) {
  datoCmsArticle(slug: {eq: $slug}) {
    title
    postContent {
      ... on DatoCmsHeading {
        headingContent
        id
        model{apiKey}
      }
      ... on DatoCmsParagraph {
        paragraphContent
        id
        model{apiKey}
      }
      ... on DatoCmsPostImage {
        model{apiKey}
        postImageContent {
          fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
}

` */