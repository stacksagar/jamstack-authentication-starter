const SkeletonDiv2 = ({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) => {
  return (
    <div
      className={`shadow w-full flex rounded bg-gray-300 dark:bg-gray-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default SkeletonDiv2;
