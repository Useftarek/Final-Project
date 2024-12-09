import { useQuery } from "@tanstack/react-query"
import { AxiosConfig } from "../axios/AxiosConfig"

export const getAllProducts = () => {
  return useQuery({
        queryKey: ['product'],
        queryFn:  () => AxiosConfig("/products"),
    })
};

export const getDressImages = () => {
  return useQuery({
    queryKey: ['dress'],
    queryFn: () => AxiosConfig.get("/dress"),
  });
};