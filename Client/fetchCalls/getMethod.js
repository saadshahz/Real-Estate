// import React from 'react'

const getMethod = async (url) => {

  const response = await fetch(`http://localhost:3001/${url}`, {
    method: "GET",
  });

  if (response.ok) {

    const result = await response.json();
    return result;
  }
}

export default getMethod;