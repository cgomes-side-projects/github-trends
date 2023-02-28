import { Octokit } from '@octokit/rest';

export function getClient(): Octokit {
  const octokitBrowser = new Octokit({
    request: {
      timeout: 0,
    },
  });

  return octokitBrowser;
}
