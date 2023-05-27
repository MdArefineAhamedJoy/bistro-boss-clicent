import { useEffect, useState } from "react";

const useMenu = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuItem(data);
      });
  }, []);
  return [menuItem, loading];
};

export default useMenu;
