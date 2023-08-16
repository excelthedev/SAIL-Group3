const useGetInputValue = (setInputValue) => {
  const setRequest = (key, value) => {
    setInputValue((preValue) => {
      return {
        ...preValue,
        [key]: value,
      };
    });
  };

  return { setRequest };
};

export default useGetInputValue;
