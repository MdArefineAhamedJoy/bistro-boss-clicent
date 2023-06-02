import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
  const {data:menuItem=[] , isLoading:loading , refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async () =>{
      const res = await fetch('http://localhost:5000/menu')
      return res.json()
    }
  })
  return [menuItem, loading ,  refetch];
};

export default useMenu;
