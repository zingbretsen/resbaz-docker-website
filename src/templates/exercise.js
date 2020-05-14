import React from 'react';
import { Link, graphql } from 'gatsby';

export default ({ data }) => (
    <div style={{'width': '100%'}}>
      <div className={"sidebar"}>
        {
            data.allExercise.edges.map(ex => {console.log(ex); return (
                <div key={ex.node.index}>
                  <Link to={`/exercises/${ex.node.index}`}>
                    {ex.node.title} {ex.node.index}
                  </Link>
                  <br/>
                </div>
            ) })
        }
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.exercise.html }}
      />
    </div>
);

export const query = graphql`
query ExerciseQuery($index: Int!) {
  exercise(index: {eq: $index}) {
    html
    index
  }
  allExercise {
    edges {
      node {
        index
        title
      }
    }
  }
}
`;
