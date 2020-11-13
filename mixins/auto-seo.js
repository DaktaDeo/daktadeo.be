export default {
  head() {
    const defaults = {}
    const values = [
      {
        name: 'title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },
      {
        name: 'description',
        content: _.get(this, 'post.meta.description', defaults.description),
      },
      {
        name: 'author',
        content: _.get(this, 'post.meta.social.author', defaults.author),
      },
      {
        name: 'apple-mobile-web-app-title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },

      // Facebook & LinkedIn
      {
        property: 'og:title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },
      {
        property: 'og:description',
        content: _.get(this, 'post.meta.description', defaults.description),
      },
      {
        property: 'og:type',
        content: _.get(this, 'post.meta.social.type', defaults.type),
      },
      {
        property: 'og:url',
        content: _.get(this, 'post.meta.social.url', defaults.url),
      },
      {
        property: 'og:image',
        content: _.get(this, 'post.meta.social.image', defaults.image),
      },
      {
        property: 'og:locale',
        content: _.get(this, 'post.meta.locale', defaults.locale),
      },

      // Twitter
      {
        name: 'twitter:card',
        content: _.get(
          this,
          'post.meta.social.twitter.card',
          defaults.twitter_card
        ),
      },
      {
        name: 'twitter:site',
        content: _.get(this, 'post.meta.social.twitter.site', defaults.site),
      },
      {
        name: 'twitter:creator',
        content: _.get(
          this,
          'post.meta.social.twitter.creator',
          defaults.creator
        ),
      },
      {
        name: 'twitter:title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },
      {
        name: 'twitter:description',
        content: _.get(this, 'post.meta.description', defaults.description),
      },
      {
        name: 'twitter:image',
        content: _.get(this, 'post.meta.social.image', defaults.image),
      },
    ]

    return {
      title: values.title,
      meta: _.map(
        _.filter(values, function (o) {
          return !_.isEmpty(o.content) && !_.isNil(o.name)
        }),
        (tag) => {
          return {
            hid: tag.name,
            name: tag.name,
            content: tag.content,
          }
        }
      ),
    }
    // return {
    //   title: this.post.meta.title,
    //   meta: [
    //     {
    //       hid: 'description',
    //       name: 'description',
    //       content: this.post.meta.description,
    //     },
    //     {
    //       hid: 'og:title',
    //       property: 'og:title',
    //       content: this.post.meta.title,
    //     },
    //     {
    //       hid: 'og:description',
    //       property: 'og:description',
    //       content: this.post.meta.description,
    //     },
    //     {
    //       hid: 'twitter:title',
    //       name: 'twitter:title',
    //       content: this.post.meta.title,
    //     },
    //     {
    //       hid: 'twitter:description',
    //       name: 'twitter:description',
    //       content: this.post.meta.description,
    //     },
    //   ],
    // }
  },
}
