import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import axios from "axios";

//QUERY GET REQUEST
export const useGetProducts = () => {
  const getProducts = async () => {
    const response = await axiosInstance.get("/import/admin/allRequests");
    const data = await response.data;
    return data;
  };
  return useQuery({ queryKey: ["products"], queryFn: () => getProducts() });
};

//MUTATION(post, patch, delete)

const log = async () => {
  let data;
  data = "Daniel";
  console.log(data);
};

export const useLog = () => {
  return useMutation({ mutationFn: () => log() });
};
