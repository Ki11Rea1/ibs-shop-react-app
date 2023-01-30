import { mockoon } from "./client.js";

export const getDetailedPageData = async (id) => {
  const { content = null } = await mockoon
    .get(`/item/${id}`)
    .then((responce) => responce.data);
  return content;
};
