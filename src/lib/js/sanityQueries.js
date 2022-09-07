export const homePageQuery = `*[_type == "page" && title == "Home"]{
  "pageTitle": title,
  "pageDescription": description,
  "pageBody": body[]{
    ...,
    _type == 'figure' => {
      ...,
      "url": image.asset->url
    },
    _type == 'navigation' => {
      title,
      items[]{
        text,
        description,
        "slug": navigationItemUrl.internalLink->slug.current
      }
    }
  }
}[0]`;
