import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  min-height: 280px;
  .gatsby-image-wrapper {
    max-height: 300px;
    aspect-ratio: 16/9;
    border-radius: 10px;
    margin-top: 20px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;

    width: 100%;
    .article-content {
      line-height: 24px;
      height: max-content;
      margin-bottom: 10px;
    }
    .title-date {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      justify-content: space-between;
      .title {
        font-size: 2rem;
      }
      .date {
        color: var(--main-color);
        strong {
          margin-left: 5px;
          white-space: nowrap;
        }
      }
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    .gatsby-image-wrapper {
      margin-top: 0;
      margin-left: 30px;
      width: 60%;
    }
  }
`;

const Article = ({ title, paragraphShort, image, date, slug }) => {
  return (
    <Wrapper>
      <div className='content-wrapper'>
        <div className='title-date'>
          <h2 className='title'>{title}</h2>
          <p className='date'>
            Data publikacji:
            <strong>{date}</strong>
          </p>
        </div>
        <p
          className='article-content'
          dangerouslySetInnerHTML={{
            __html: paragraphShort.substring(0, 330).concat('...'),
          }}
        />
        <Link to={'/blog/' + slug} className='btn'>
          Czytaj...
        </Link>
      </div>
      <GatsbyImage image={getImage(image)} alt={slug} />
    </Wrapper>
  );
};

export default Article;
