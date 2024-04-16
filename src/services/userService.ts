export type UserFetchResponse = { name: string; email: string };

export const fetchUser = async () => {
  const res = await fetch('/api/user', { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } });
  if (!res.ok) throw Error('Failed to fetch user');
  return (await res.json()) as UserFetchResponse;
};

export const fetchDefinition = async (wordToDefine: string) => {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToDefine}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
  const json = await res.json();
  if (!res.ok) throw Error('Failed to fetch definition');
  return json[0].meanings[0].definitions[0].definition;
};
