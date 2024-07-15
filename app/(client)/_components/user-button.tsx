import { getCurrentUser } from '@/app/data/user';
import { UserButtonOptions } from './user-button-options';

export async function UserButton() {
  const currentUser = await getCurrentUser();

  return (
    <UserButtonOptions imgUrl={currentUser.profileImageUrl!} username={currentUser.nickname} />
  );
}
