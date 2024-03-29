import groq from 'groq'

const layoutFields = groq`
  title,
  description,
  logo{
    ...,
    ...(image.asset-> {
      "image": {
        "mobile": url + "?w=200&auto=format",
        "tablet": url + "?w=400&auto=format",
        "fullSize": url + "?auto=format"
      }
    })
  },
  organization{
    ...,
    logo{
      ...,
      ...(image.asset-> {
        "image": {
          "fullSize": url
        }
      })
    }
  },
  navigationSections[]{
    _type == "navigationReference" => @->{
      items[]{
        text,
        "href": navigationItemUrl.internalLink->slug.current
      },
      title,
      "slug": navigationId.current
    }
  }
`

export const layoutQuery = groq`*[_type == "siteSettings"] [0] {
  ${layoutFields}
}`

const homePageFields = groq`
  ...,
  "slug": slug.current,
  webPageSeo{
    ...,
    openGraph{
      ...,
      ogImage{
        ...,
        ...(image.asset-> {
          "image": {
            "twitter": url + "?w=800&h=418&auto=format",
            "facebook": url + "?w=1200&h=630&auto=format",
            "fullSize": url + "?auto=format",
            "sourceImage": url
          }
        })
      }
    }
  },
  body[]{
    ...,
    _type == "figure" => {
      ...,
      "url": image.asset->url
    },
    _type == "navigationReference" => @->{
      title,
      description,
      items[]{
        text,
        description,
        "slug": navigationItemUrl.internalLink->slug.current
      }
    }
  }
`

// TODO you'll have to query this by some field that's not editable long-term
export const homePageQuery = `*[_type == "page" && slug.current == "/"] [0] {
  ${homePageFields}
}`;

export const homePagePreviewQuery = groq`*[_type == "page" && slug.current == "/"] | order(date desc, _updatedAt desc) [0] {
  ${homePageFields}
}`

export const pageSlugQuery = groq`*[_type == "page" && slug.current == $slug] [0] {
  "slug": slug.current
}`

export const eventPageFields = groq`
  ...,
  "slug": slug.current,
  webPageSeo{
    ...,
    openGraph{
      ...,
      ogImage{
        ...,
        ...(image.asset-> {
          "image": {
            "twitter": url + "?w=800&h=418&auto=format",
            "facebook": url + "?w=1200&h=630&auto=format",
            "fullSize": url + "?auto=format",
            "sourceImage": url
          }
        })
      }
    }
  },
  body[]{
    ...,
    _type == 'eventReference' => @->{
      ...,
      title,
      date,
      description[]{
        ...,
        _type == "figure" => {
          ...,
          ...(image.asset-> {
            "image": {
              "mobile": url + "?w=800&auto=format",
              "tablet": url + "?w=1600&auto=format",
              "desktop": url + "?w=2400&auto=format",
              "fullSize": url + "?auto=format",
              "sourceImage": url
            }
          })
        }
      }
    }
  }
`

export const eventPageQuery = groq`*[_type == "page" && slug.current == $slug && event == true] [0] {
  ${eventPageFields}
}`

export const eventPagePreviewQuery = groq`*[_type == "page" && slug.current == $slug && event == true] | order(date desc, _updatedAt desc) [0] {
  ${eventPageFields}
}`

const pageFields = groq`
  ...,
  "slug": slug.current,
  webPageSeo{
    ...,
    openGraph{
      ...,
      ogImage{
        ...,
        ...(image.asset-> {
          "image": {
            "twitter": url + "?w=800&h=418&auto=format",
            "facebook": url + "?w=1200&h=630&auto=format",
            "fullSize": url + "?auto=format",
            "sourceImage": url
          }
        })
      }
    }
  },
  body[]{
    ...,
    _type == "figure" => {
      ...,
      ...(image.asset-> {
        "image": {
          "mobile": url + "?w=800&auto=format",
          "tablet": url + "?w=1600&auto=format",
          "desktop": url + "?w=2400&auto=format",
          "fullSize": url + "?auto=format",
          "sourceImage": url
        }
      })
    },
    _type == "navigationReference" => @->{
      title,
      description,
      items[]{
        text,
        description,
        "href": navigationItemUrl.externalUrl
      }
    },
    _type == "meetingReference" => @->{
      items[]->
    }
  }
`

export const slugPageQuery = groq`*[_type == "page" && slug.current == $slug && event != true] [0] {
    ${pageFields}
  }`;

export const slugPagePreviewQuery = groq`*[_type == "page" && slug.current == $slug && event != true] | order(date desc, _updatedAt desc) [0] {
  ${pageFields}
}`

// for more on filtering arrays to access deeply nested properties in GROQ, see: https://blog.novacare.no/filtering-an-array-for-specific-types-with-groq/
export const sitemapQuery = () => groq`
*[_type == "page"]{
  "slug": slug.current,
  "bodyEventImages": body[@._type == "eventReference"]->.description[@._type == "figure"].image.asset->url,
  "bodyImages": body[@._type == "figure"].image.asset->url
}`;
