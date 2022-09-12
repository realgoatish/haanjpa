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

export const slugQuery = (slug) =>
	`*[_type == "page" && slug.current == "${slug}" && event != true][0]`;

export const aboutPageQuery = `*[_type == "page" && title == "About HA"]{
  ...,
  body[]{
    ...
  }
}[0]`;
