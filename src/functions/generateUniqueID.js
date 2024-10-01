export default function() {
  const timestamp = Date.now().toString(16);
  const randomPart = Math.random().toString(16).substring(2, 8);
  return timestamp + randomPart;
}