const xhr = new XMLHttpRequest();

apicall = (method, url, callback) => {
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      if (callback) callback(xhr.responseText);
    }
  };
  xhr.open(method, url);
  xhr.send(data);
};



