import React, { useEffect } from 'react';
import Article from '../../components/organisms/Article';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useGitaradyContext } from '../../context/context';
import Pagination from '../../components/molecules/Pagination';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  min-height: calc(100vh - 81px);
  &.section {
    padding: 10rem 0 5rem;
  }
  .paginate-wrapper {
    flex: 1;
  }
`;

const Index = ({ data }) => {
  const { setTotalArticles, currentArticles } = useGitaradyContext();
  const allArticles = data.allDatoCmsArticle.nodes;

  useEffect(() => {
    setTotalArticles(allArticles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allArticles.length]);
  // console.log(data.allDatoCmsArticle.nodes);

  return (
    <>
      <Wrapper className='section section-center'>
        {currentArticles.map((article) => {
          const { title, paragraphShort, image, date, id, slug } = article;
          return (
            <Article
              title={title}
              paragraphShort={paragraphShort}
              image={image.gatsbyImageData}
              date={date}
              key={id}
              slug={slug}
            />
          );
        })}
        <Pagination />
      </Wrapper>
    </>
  );
};

export default Index;

export const Head = () => <title>Gitarady - Blog</title>;

export const query = graphql`
  query ProjectList {
    allDatoCmsArticle(sort: { date: DESC }) {
      nodes {
        id
        title
        date
        paragraphShort
        slug
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`;
