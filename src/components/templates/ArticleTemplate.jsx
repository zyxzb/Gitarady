import React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Wrapper } from './Article.template';

const ArticleTemplate = ({ data }) => {
  const {
    title,
    subtitle,
    paragraphShort,
    subtitleH3,
    content,
    date,
    image,
    slug,
  } = data.datoCmsArticle;

  return (
    <Wrapper className='section section-center'>
      <div className='top'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className='center section'>
        <div className='image-wrapper'>
          <GatsbyImage image={getImage(image)} alt={slug} />
        </div>
        <div className='text-wrapper'>
          <p dangerouslySetInnerHTML={{ __html: paragraphShort }} />
        </div>
      </div>
      <div className='bottom'>
        <h3>{subtitleH3}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <div className='section back-date'>
          <button className='btn' onClick={() => navigate(-1)}>
            Powrót
          </button>
          <span className='date'>Data publikacji: {date}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ArticleTemplate;

export const Head = ({ data }) => (
  <>
    <title>{data.datoCmsArticle.seoTags.title}</title>;
    <meta
      name='desctiption'
      content={data.datoCmsArticle.seoTags.description}
    ></meta>
  </>
);

export const query = graphql`
  query SingleArticle($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      id
      title
      subtitle
      paragraphShort
      subtitleH3
      content
      date
      slug
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      seoTags {
        description
        title
      }
    }
  }
`;
