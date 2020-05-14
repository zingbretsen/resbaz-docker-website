import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div>
    <div
      dangerouslySetInnerHTML={{ __html: data.lesson.html }}
    />
  </div>
);

export const query = graphql`
  query LessonQuery($index: Int!) {
    lesson(index: { eq: $index }) {
      html
      index
    }
  }
`;
