import { addRepo, removeRepo } from './FavoritesStoreActions';

test('should add a repo to the store', () => {
  const initialState: number[] = [];
  const newState = addRepo(1, initialState);

  expect(initialState).toHaveLength(0);
  expect(newState).toHaveLength(1);
});

test('should not add the same repo twice', () => {
  const initialState: number[] = [1, 2];
  const newState = addRepo(1, initialState);

  expect(initialState).toEqual([1, 2]);
  expect(newState).toEqual([2, 1]);
});

test('should remove repos from the store without errors', () => {
  expect(removeRepo(1, [])).toEqual([]);
  expect(removeRepo(2, [1, 2, 3])).toEqual([1, 3]);
});
