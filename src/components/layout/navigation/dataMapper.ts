import { Navigation } from '.'

export const storyblokDataToNavigation = (storyblokData: any): Parameters<typeof Navigation>[0] => {
  const { NavigationItem: { content: { links } } } = storyblokData

  const props: Parameters<typeof Navigation>[0] = {
    links: links.map(({ link, label }: any) => ({ children: label, href: link.url }))
  }
  return props
}