const title =
  'Object.Wtf – A nice library of modest 3D illustrations to take your design to the next level.'
const description = 'Enhance your design story, with fancy and colorful illustrations for your next project. All these graphics can be useful for financial applications, presentations, services and many more.'

const SEO = {
  title,
  description,
  canonical: 'https://www.object.wtf',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.object.wtf',
    title,
    description,
    images: [
      {
        url: 'https://www.object.wtf/Og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },

}

export default SEO