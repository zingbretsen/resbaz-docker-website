import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Swipeable from 'react-swipeable';
import Transition from '../components/transition';
import Header from '../components/header';

import './base.css';

class TemplateWrapper extends Component {
  NEXT = [13, 32, 39];
  PREV = 37;

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT[0] });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

    navigate = ({ keyCode }) => {
        const { location } = this.props;
        if (!/^\/[0-9]+\/?$/.test(location.pathname)) {return false;}

        const now = this.props.data.slide.index;
        const slidesLength = this.props.slidesLength;

        if (now) {
            if (keyCode === this.PREV && now === 1) {
                return false;
            } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
                return false;
            } else if (this.NEXT.indexOf(keyCode) !== -1) {
                navigate(`/${now + 1}`);
            } else if (keyCode === this.PREV) {
                navigate(`/${now - 1}`);
            }
        }
        return false;
    };

    componentDidMount() {
        document.addEventListener('keydown', this.navigate);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.navigate);
    }

    render() {
        const { location, children, site } = this.props;
        let content_id = 'page';
        if (/exercise/.test(location.pathname)) {
            content_id = 'exercise';
        } else if (/^\/[0-9]+\/?$/.test(location.pathname)) {
            content_id = 'slide';
        }     return (
            <>
              <Helmet
                title={`${site.siteMetadata.title} — ${site.siteMetadata.name}`}
              />
              <Header
                name={site.siteMetadata.name}
                title={site.siteMetadata.title}
                date={site.siteMetadata.date}
              />
              <Swipeable className={content_id}
                         onSwipedLeft={this.swipeLeft}
                         onSwipedRight={this.swipeRight}
              >
                <Transition location={location} type={content_id}>
                  {children}
                </Transition>
              </Swipeable>
            </>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.node,
    data: PropTypes.object,
};

export default props => (
    <StaticQuery
      query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            name
            title
            date
          }
        }
        allSlide {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
      render={data => (
          <TemplateWrapper
            site={data.site}
            slidesLength={data.allSlide.edges.length}
            {...props}
          />
      )}
    />
);
