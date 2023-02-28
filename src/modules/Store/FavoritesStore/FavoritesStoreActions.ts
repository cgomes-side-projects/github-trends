export function addRepo(id: number, storedIds: number[]): number[] {
  const newState = removeRepo(id, storedIds);
  newState.push(id);
  return newState;
}

export function removeRepo(id: number, storedIds: number[]): number[] {
  return storedIds.filter((i) => id !== i);
}
