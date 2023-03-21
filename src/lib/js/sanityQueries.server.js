// TODO you'll have to query this by some field that's not editable long-term
export const homePageQuery = `*[_type == "page" && title == "Welcome to HAANJPA.ORG"]{
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

export const layoutQuery = () => `*[_type == "siteSettings"]{
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

export const slugQuery = (slug) =>
	`*[_type == "page" && slug.current == "${slug}" && event != true]{
    ...,
    body[]{
      ...,
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
  }[0]`;

export const sitemapQuery = () =>
	`*[_type == "page"]{
    slug
  }`;
