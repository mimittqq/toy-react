export function isEventName(prop:string) {
  return /^on([a-zA-Z]+)$/.test(prop);
}