_ = require('lodash')

export default (context, inject) => {
  const metaTags = () => {
    const options = {
      url: 'Site url',
      title: 'Title',
      site_name: 'Site name',
      description: 'Site description 123',
      img: 'Link to image in static folder',
      locale: 'nl_BE',
      twitter: '@user',
      twitter_card: 'summary_large_image',
      themeColor: '#theme-color',
    }

    return [
      // Global
      { name: 'title', content: _.get(this, 'post.title', options.title) },
      {
        name: 'description',
        content: _.get(this, 'post.description', options.description),
      },
      {
        name: 'author',
        content: _.get(this, 'post.meta.social.author', options.author),
      },
      {
        name: 'apple-mobile-web-app-title',
        content: _.get(this, 'post.title', options.title),
      },

      // Facebook & LinkedIn
      {
        property: 'og:title',
        content: _.get(this, 'post.title', options.title),
      },
      {
        property: 'og:description',
        content: _.get(this, 'post.description', options.description),
      },
      {
        property: 'og:type',
        content: _.get(this, 'post.meta.social.type', options.type),
      },
      {
        property: 'og:url',
        content: _.get(this, 'post.meta.social.url', options.url),
      },
      {
        property: 'og:image',
        content: _.get(this, 'post.meta.social.image', options.image),
      },
      {
        property: 'og:locale',
        content: _.get(this, 'post.meta.locale', options.locale),
      },

      // Twitter
      {
        name: 'twitter:card',
        content: _.get(this, 'post.meta.social.twitter.card', null),
      },
      {
        name: 'twitter:site',
        content: _.get(this, 'post.meta.social.twitter.site', null),
      },
      {
        name: 'twitter:creator',
        content: _.get(this, 'post.meta.social.twitter.creator', null),
      },
      { name: 'twitter:title', content: _.get(this, 'post.title', null) },
      {
        name: 'twitter:description',
        content: _.get(this, 'post.description', null),
      },
      {
        name: 'twitter:image',
        content: _.get(this, 'post.meta.social.image', null),
      },
    ]
  }
  inject('metaTags', metaTags)

  const addMetaTagsToHead = () => {
    _.forEach(metaTags, (tag) => {
      if (!_.isNil(tag.content)) {
        // eslint-disable-next-line no-prototype-builtins
        if (tag.hasOwnProperty('name')) {
          this.options.head.meta.push({
            hid: tag.name,
            name: tag.name,
            content: tag.content,
          })
          // eslint-disable-next-line no-prototype-builtins
        } else if (tag.hasOwnProperty('property')) {
          this.options.head.meta.push({
            hid: tag.property,
            property: tag.property,
            content: tag.content,
          })
        }
      }
    })
  }
  inject('addMetaTagsToHead', addMetaTagsToHead)
  // return {
  //   title: _.get(this, 'post.title', null),
  //   meta: _.map(metaTags, (tag) => {
  //     return {
  //       hid: tag.name,
  //       name: tag.name,
  //       content: tag.content,
  //     }
  //   }),
  // }
}
