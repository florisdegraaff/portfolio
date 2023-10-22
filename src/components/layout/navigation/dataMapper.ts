import { Navigation } from '.'

export const storyblokDataToNavigation = (storyblokData: any): Parameters<typeof Navigation>[0] => {
  const { NavigationItem: { content: { links } } } = storyblokData

  const props: Parameters<typeof Navigation>[0] = {
    links: links.map(({ label, link }: any) => {
      return {
        children: label,
        href: link.url && link.url !== '' ? link.url : link.cached_url
      }
    })
  }
  return props
}