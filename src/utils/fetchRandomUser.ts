import type { RandomUser } from '@/types/user';

export async function fetchRandomUser(): Promise<RandomUser> {
  const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
  if (!res.ok) throw new Error('Failed to fetch random user');
  const json = await res.json();
  return json.results[0] as RandomUser;
}
