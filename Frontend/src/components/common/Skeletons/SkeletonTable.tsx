import SkeletonDiv1 from "./SkeletonDiv1";
import SkeletonDiv2 from "./SkeletonDiv2";
import SketelonWrapper from "./SketelonWrapper";

const SkeletonTable = () => {
  return (
    <SketelonWrapper>
      <SkeletonDiv2 className="h-12" />
      <SkeletonDiv2 className="h-8" />
      <SkeletonDiv2 className="h-20" />
      <SkeletonDiv2 className="h-20" />
      <SkeletonDiv2 className="p-2 justify-between flex-col gap-2 sm:flex-row">
        <div className="w-full sm:w-32">
          <SkeletonDiv1 className="h-8" />
        </div>
        <div className="grid grid-cols-4 w-full sm:w-40 gap-2">
          <SkeletonDiv1 className="h-8" />
          <SkeletonDiv1 className="h-8" />
          <SkeletonDiv1 className="h-8" />
          <SkeletonDiv1 className="h-8" />
        </div>
      </SkeletonDiv2>
    </SketelonWrapper>
  );
};

export default SkeletonTable;
