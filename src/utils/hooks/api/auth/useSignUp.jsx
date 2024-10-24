import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const signIn = async (signInRequest) => {
  const res = await axios.post(
    `https://rac-backend.onrender.com/api/users`,
    signInRequest,
  );
  return res.data;
};

const useAccountAuthenticate = () => {
  return useMutation({ mutationFn: () => signIn() });
};

export default useAccountAuthenticate;
