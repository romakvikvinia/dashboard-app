import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import type { ConfigResponseType } from "./types/config.types.ts";
import { setBaseUrls } from "./util/index.ts";
import { RouterProvider } from "react-router/dom";
import { routes } from "./router/index.ts";

let xhrConfig: XMLHttpRequest;
const reactDom = createRoot(document.getElementById("root")!);

function setConsole(server: string) {
  if (server === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }
}

const fetchConfig = () =>
  new Promise((resolve, reject) => {
    xhrConfig = new XMLHttpRequest();
    xhrConfig.open("GET", "/config.json", true);
    xhrConfig.setRequestHeader("Cache-Control", "no-cache");
    xhrConfig.onload = resolve;
    xhrConfig.onerror = reject; // () => reject(xhrConfig.statusText); //  console.error(xhrConfig.statusText);
    xhrConfig.send(null);
  });

function requestOnload() {
  if (xhrConfig.readyState === 4 && xhrConfig.status === 200) {
    const serverConfig = JSON.parse(
      xhrConfig.responseText
    ) as ConfigResponseType;
    processResults(serverConfig);
  }

  function processResults(serverConfig: ConfigResponseType) {
    setBaseUrls({
      baseUrl: serverConfig.apiUrl,
      staticContentBaseUrl: serverConfig.staticContentBaseUrl,
    });
    setConsole(serverConfig.server);

    reactDom.render(
      <StrictMode>
        <RouterProvider router={routes} />
      </StrictMode>
    );
  }
}

fetchConfig().then(requestOnload);
