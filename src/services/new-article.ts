import { alova } from "@/lib/alova";

export type NewArticlesProps = {
  title: string;
  description: string;
  image_base64: string;
  content: string;
};

export const createNewArticles = (input: NewArticlesProps) => {
  const response = alova.Post("posts/create", input);
  return response;
};
