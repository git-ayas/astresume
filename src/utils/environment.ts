export const isDevelopment = import.meta.env.MODE === 'development';
export const getEnvironment = () => {
  return import.meta.env?.mode || 'development';
}
export const getBaseUrl = () => {
  return import.meta.env?.BASE_URL || '/';
}

export const getEditorAssetsPath = () => {
  return isDevelopment ? "content-manager/":'';
}
export const getEditorBranch = () => {
  return import.meta.env?.editorBranch || 'main';
}
