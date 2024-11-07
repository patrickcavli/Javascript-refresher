const fetchStuffFact = (token) => {
  return (url) => {
    return (options) => {
      console.log(token, url, options);
    };
  };
};

fetchStuffFact("Token")("URL")("Options");  
