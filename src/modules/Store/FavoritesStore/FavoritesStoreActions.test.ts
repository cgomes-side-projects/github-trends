import { addRepo, removeRepo } from './FavoritesStoreActions';
import type { Repository, StoredRepos } from './FavoriteStore.types';

const repo1 = {
  id: 1,
  name: 'repo1',
} as Repository;

const repo2 = {
  id: 2,
  name: 'repo2',
} as Repository;

test('should add a repo to the store', () => {
  const initialState: StoredRepos = {};
  const newState = addRepo(repo1, initialState);

  expect(initialState).toEqual({});
  expect(newState).toEqual({
    [repo1.id]: repo1,
  });
});

test('should not add the same repo twice', () => {
  const initialState: StoredRepos = {
    [repo1.id]: repo1,
    [repo2.id]: repo2,
  };

  const newState = addRepo(repo1, initialState);

  expect(initialState).toEqual({
    [repo1.id]: repo1,
    [repo2.id]: repo2,
  });
  expect(newState).toEqual({
    [repo1.id]: repo1,
    [repo2.id]: repo2,
  });
});

test('should remove repos from the store without errors', () => {
  expect(removeRepo(repo1.id, {})).toEqual({});
  expect(
    removeRepo(repo2.id, {
      [repo1.id]: repo1,
      [repo2.id]: repo2,
    }),
  ).toEqual({
    [repo1.id]: repo1,
  });
});
