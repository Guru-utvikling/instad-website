import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ArticlesPreviewWrapper = styled(BackgroundImage)`
  padding:0;
  border-radius:1rem;
  overflow:hidden;
  margin:10px;
`

const ArticlesPreviewBox =styled.div`
  display:flex;
  width:400px;
  height:200px;
  justify-content:center;
  align-items:center;
  h1{
    font-size:22px !important;
    color:white;
  }
  :hover{
    h1{
      color:blue;
    }
  }
`
const ArticlesPreview  = ({title, slug, background}) => {
    return (
    <ArticlesPreviewWrapper fluid={background}>
      <Link to={`/blog/${slug}`} >
        <ArticlesPreviewBox >
          <h1>{title}</h1>
          <p>Lorem</p>
        </ArticlesPreviewBox>
      </Link>
    </ArticlesPreviewWrapper>

      
    )
}

  
  export default ArticlesPreview