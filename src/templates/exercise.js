import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div style={{'width': '100%'}}>
    <div
      dangerouslySetInnerHTML={{ __html: data.exercise.html }}
    />
  </div>
);

export const query = graphql`
  query ExerciseQuery($index: Int!) {
    exercise(index: { eq: $index }) {
      html
      index
    }
  }
`;
