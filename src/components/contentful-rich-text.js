import React from 'react'
import PropTypes from 'prop-types'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className="text-brand-link cursor-pointer underline hover:text-brand-secondary"
      >
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
}

const ContentfulRichTech = ({ richText }) => {
  return richText ? <div>{renderRichText(richText, options)}</div> : null
}

ContentfulRichTech.propTypes = {
  /** Contentful rich text */
  richText: PropTypes.any.isRequired,
}

export default ContentfulRichTech
