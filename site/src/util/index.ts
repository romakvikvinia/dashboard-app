export let baseUrl = "";
export let staticContentBaseUrl = "";

export const setBaseUrls = ({
  baseUrl: _baseUrl,
  staticContentBaseUrl: _staticContentBaseUrl,
}: {
  baseUrl: string;
  staticContentBaseUrl: string;
}) => {
  baseUrl = _baseUrl;
  staticContentBaseUrl = _staticContentBaseUrl;
};
