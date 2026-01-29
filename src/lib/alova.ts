import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import ReactHook from "alova/react";

export const alova = createAlova({
  baseURL: "https://9b8c17cd76d3.ngrok-free.app",
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  beforeRequest: (method) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      console.log({ token });

      if (token) {
        method.config.headers = {
          ...(method.config.headers || {}),
          Authorization: `Bearer ${token}`,
        };
      }
    }
  },
  responded: async (response) => {
    return response.json();
  },
});
