export default function binary_search(targetID: number, arr?: any[]): number {
  if (!arr) return -1;

  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const midIndex = Math.floor((l + r) / 2);
    const midId = arr[midIndex].id;

    if (targetID === midId) return midIndex;
    if (targetID === arr[l].id) return l;
    if (targetID === arr[r].id) return r;

    if (targetID > midId) {
      l = midIndex + 1;
    } else {
      r = midIndex - 1;
    }
  }

  return -1;
}
