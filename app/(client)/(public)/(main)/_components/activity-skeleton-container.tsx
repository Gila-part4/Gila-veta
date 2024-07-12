import ActivitySkeleton from './activity-skeleton';

export default function ActivitySkeletonContainer() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <ActivitySkeleton />
      <ActivitySkeleton />
      <ActivitySkeleton />
      <ActivitySkeleton />
    </div>
  );
}
