import { menuData } from "./menu/menuData";

export default function sitemap() {
  const baseUrl = "http://localhost:3000";

  const menuPages = menuData.map((dish) => ({
    url: `${baseUrl}/menu/${dish.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
    },
    ...menuPages,
  ];
}