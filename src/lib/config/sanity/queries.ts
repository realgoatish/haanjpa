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
export const homePageQuery = `*[_type == "page" && title == "Heroin Anonymous of New Jersey and Pennsylvania"] [0] {
  ${homePageFields}
}`;

// // TODO you'll have to query this by some field that's not editable long-term
// export const homePageQuery = `*[_type == "page" && title == "Heroin Anonymous of New Jersey and Pennsylvania"]{
//   ...,
//   "slug": slug.current,
//   webPageSeo{
//     ...,
//     openGraph{
//       ...,
//       ogImage{
//         ...,
//         ...(image.asset-> {
//           "image": {
//             "twitter": url + "?w=800&h=418&auto=format",
//             "facebook": url + "?w=1200&h=630&auto=format",
//             "fullSize": url + "?auto=format",
//             "sourceImage": url
//           }
//         })
//       }
//     }
//   },
//   body[]{
//     ...,
//     _type == "figure" => {
//       ...,
//       "url": image.asset->url
//     },
//     _type == "navigationReference" => @->{
//       title,
//       description,
//       items[]{
//         text,
//         description,
//         "slug": navigationItemUrl.internalLink->slug.current
//       }
//     }
//   }
// }[0]`;

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

// export const eventQuery = (slug) =>
// 	`*[_type == "page" && slug.current == "${slug}" && event == true]{
//     ...,
//     "slug": slug.current,
//     webPageSeo{
//       ...,
//       openGraph{
//         ...,
//         ogImage{
//           ...,
//           ...(image.asset-> {
//             "image": {
//               "twitter": url + "?w=800&h=418&auto=format",
//               "facebook": url + "?w=1200&h=630&auto=format",
//               "fullSize": url + "?auto=format",
//               "sourceImage": url
//             }
//           })
//         }
//       }
//     },
//     body[]{
//       ...,
//       _type == 'eventReference' => @->{
//         ...,
//         title,
//         date,
//         description[]{
//           ...,
//           _type == "figure" => {
//             ...,
//             ...(image.asset-> {
//               "image": {
//                 "mobile": url + "?w=800&auto=format",
//                 "tablet": url + "?w=1600&auto=format",
//                 "desktop": url + "?w=2400&auto=format",
//                 "fullSize": url + "?auto=format",
//                 "sourceImage": url
//               }
//             })
//           }
//         }
//       }
//     }
//   }[0]`;

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

// export const slugQuery = (slug) =>
// 	`*[_type == "page" && slug.current == "${slug}" && event != true]{
//     ...,
//     "slug": slug.current,
//     webPageSeo{
//       ...,
//       openGraph{
//         ...,
//         ogImage{
//           ...,
//           ...(image.asset-> {
//             "image": {
//               "twitter": url + "?w=800&h=418&auto=format",
//               "facebook": url + "?w=1200&h=630&auto=format",
//               "fullSize": url + "?auto=format",
//               "sourceImage": url
//             }
//           })
//         }
//       }
//     },
//     body[]{
//       ...,
//       _type == "figure" => {
//         ...,
//         ...(image.asset-> {
//           "image": {
//             "mobile": url + "?w=800&auto=format",
//             "tablet": url + "?w=1600&auto=format",
//             "desktop": url + "?w=2400&auto=format",
//             "fullSize": url + "?auto=format",
//             "sourceImage": url
//           }
//         })
//       },
//       _type == "navigationReference" => @->{
//         title,
//         description,
//         items[]{
//           text,
//           description,
//           "href": navigationItemUrl.externalUrl
//         }
//       },
//       _type == "meetingReference" => @->{
//         items[]->
//       }
//     }
//   }[0]`;

export const sitemapQuery = () =>
	`*[_type == "page"]{
    "slug": slug.current
  }`;
