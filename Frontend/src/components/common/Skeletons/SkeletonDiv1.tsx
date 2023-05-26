const SkeletonDiv1 = ({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) => {
  return (
    <div
      className={`shadow w-full flex rounded bg-gray-200 dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  );
};

export default SkeletonDiv1;
