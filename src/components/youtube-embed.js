import React from 'react'
import PropTypes from 'prop-types'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const YouTubeEmbed = ({ id, title, params, minHeight }) => {
  return (
    <div className="relative w-full aspect-video overflow-hidden border border-brand-tertiary">
      <LiteYouTubeEmbed
        id={id}
        title={title}
        noCookie={true}
        playlist={false}
        params={params}
      />
    </div>
  )
}

YouTubeEmbed.defaultProps = {
  minHeight: 478,
}

YouTubeEmbed.propTypes = {
  /** The id of the YouTube video */
  id: PropTypes.string.isRequired,
  /** The title of the YouTube video */
  title: PropTypes.string.isRequired,
  /** The YouTubePlay params */
  params: PropTypes.string,
  /** The min-height of the video */
  minHeight: PropTypes.number,
}

export default YouTubeEmbed
