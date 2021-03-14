export function getHostName() {
  if (process.env.REACT_APP_HOST) return process.env.REACT_APP_HOST;
  return "http://localhost:3000";
}
