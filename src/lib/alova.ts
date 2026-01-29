import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import ReactHook from "alova/react";

export const alova = createAlova({
  baseURL: "https://dc52467075f8.ngrok-free.app/",
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  responded: async (response) => {
    return response.json();
  },
});
