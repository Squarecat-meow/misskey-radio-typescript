import React, { useEffect } from "react";

const CallbackPages = () => {
  const server = localStorage.getItem("server");

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const sessionId = params.get("session");

  useEffect(() => {
    fetchToken(server);

    async function fetchToken(addr: string | null) {
      const response = await fetch(
        `https://${addr}/api/miauth/${sessionId}/check`,
        {
          method: "POST",
        }
      );

      const jsondata = await response.json();
      const hostname = window.location.host;
      const protocol = window.location.protocol;
      console.log(jsondata);

      localStorage.setItem("token", jsondata.token);

      window.location.replace(`${protocol}//${hostname}/mainpage`);
    }
  }, []);

  return <div />;
};

export default CallbackPages;
