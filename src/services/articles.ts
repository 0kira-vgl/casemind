import { alova } from "@/lib/alova";
import { FeaturedArticleCardpProps } from "@/types/article-card";

export type ArticlesQuerys = {
  page?: string;
  page_size?: string;
  search?: string;
};

export const getArticles = (input: ArticlesQuerys) => {
  const params = new URLSearchParams();

  const page = input?.page;
  const page_size = input?.page_size;
  const search = input?.search;

  if (page !== undefined) params.append("page", page);
  if (page_size !== undefined) params.append("page_size", page_size);
  if (search !== undefined) params.append("search", search);

  const url = `posts?${params.toString()}`;
  // console.log(url);

  const response = alova.Post<{ items: Array<FeaturedArticleCardpProps> }>(url);
  return response;
};
