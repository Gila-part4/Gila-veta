import { getCurrentUser } from '@/app/data/user';
import { UserProfileForm } from './_components/user-profile-form';

export default async function Page() {
  const currentUser = await getCurrentUser();

  return (
    <section className="mt-10">
      <UserProfileForm
        email={currentUser.email}
        username={currentUser.nickname}
        imgUrl={currentUser.profileImageUrl}
      />
    </section>
  );
}
