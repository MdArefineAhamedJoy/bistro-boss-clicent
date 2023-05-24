import { useEffect, useState } from "react";

const useMenu = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItem(data);
      });
  }, []);
  return [menuItem, loading];
};

export default useMenu;
