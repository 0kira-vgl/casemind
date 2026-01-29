import { alova } from "@/lib/alova";

export type ArticlesProps = {
  title: string;
  description: string;
  image_base64: string;
  content: string;
};

export const createNewArticles = (input: ArticlesProps) => {
  const response = alova.Post("posts/create", input);
  return response;
};
