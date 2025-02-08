import { authContext } from "@/contexts";
import { useContext } from "react";

export const useAuth = () => useContext(authContext);
