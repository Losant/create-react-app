import React, { useState, useEffect } from "react";
import api from "../../services/api";

const Status = () => {
  const [status, setStatus] = useState("Loading");
 
  useEffect(() => {
    api({
      method: "GET",
      path: "/status"
    })
      .then((res) => {
        setStatus(res.data);
      })
      .catch((r) => {
        setStatus(r.toString());
      });
  }, []);

  return <span>Status: { status } </span>
}

export default Status;