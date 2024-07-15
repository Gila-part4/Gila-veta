export default function ActivitySkeleton() {
  return (
    <div className="flex flex-col w-[283px] gap-3.5">
      <div className="w-[283px] h-[283px] rounded-[20px] bg-slate-200" />
      <div className="flex flex-col items-start w-full gap-3.5">
        <div className="w-16 bg-slate-200 h-6 rounded-xl" />
        <div className="w-52 bg-slate-200 h-7 rounded-xl" />
        <div className="w-36 bg-slate-200 h-8 rounded-xl" />
      </div>
    </div>
  );
}
