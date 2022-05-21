import { useState, useEffect } from "react";

const UseCustomHook = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [under18, setUnder18] = useState(false);
  const [modalBox, setmodalBox] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(true);
        });
    }, 3000);
  }, []);

  const closeModal = () => {
    setmodalBox(false);
    
  };

  const showModal = () => {
    setUnder18(true);
  };

  return {data, isLoading, error, under18, modalBox, closeModal, showModal};
};

export default UseCustomHook;
