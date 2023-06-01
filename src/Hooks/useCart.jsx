import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useCart = () => {
  const { user , loading } = useAuth();
  const [axiosSecure] = useAxiosSecure()

  const { status,refetch, data: cart=[] } = useQuery({
    queryKey: ['carts' , user?.email],
    enabled: !loading,
    // queryFn: async() =>{
    //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {headers:{
    //        authorization: `barer ${token}`
    //     }})
    //     return res.json()
    // },
    queryFn: async() =>{
        const res = await axiosSecure.get(`/carts?email=${user?.email}`)
        return res.data
    },
    // enabled: !loading && !!user?.email
  })
 
return [cart, refetch]

};

export default useCart;
