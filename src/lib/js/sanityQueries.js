export const homePageQuery = `*[_type == "page" && title == "Home"]{
  ...,
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
}[0]`;

// export const layoutQuery = (projectSettings) => `*[_type == "siteSettings"]{
//   title,
//   description,
//   logo{
//     alt,
//     "imageUrls": {
//       "mobile": "https://cdn.sanity.io/images/${projectSettings.projectId}/${projectSettings.dataset}/" + image.asset._ref + "?w=400&auto=format",
//       "tablet": "https://cdn.sanity.io/images/${projectSettings.projectId}/${projectSettings.dataset}/" + image.asset._ref + "?w=800&auto=format",
//       "fullSize": "https://cdn.sanity.io/images/${projectSettings.projectId}/${projectSettings.dataset}/" + image.asset._ref + "?auto=format"
//     }
//   },
//   navigationSections[]{
//     _type == "navigationReference" => @->{
//       items[]{
//         text,
//         "href": navigationItemUrl.internalLink->slug.current
//       },
//       title
//     }
//   }
// }[0]`;

export const layoutQuery = (projectSettings) => `*[_type == "siteSettings"]{
  title,
  description,
  logo{
    alt,
    "unprocessedImageUrl": image.asset._ref
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
}[0]`;

export const eventQuery = (slug) =>
	`*[_type == "page" && slug.current == "${slug}" && event == true]{
    ...,
    body[]{
      ...,
      _type == 'eventReference' => @->
    }
  }[0]`;

export const aboutPageQuery = `*[_type == "page" && title == "About HA"]{
  ...,
  body[]{
    ...
  }
}[0]`;
