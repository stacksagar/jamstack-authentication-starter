interface props {
  children?: any;
  className?: string;
}

const SketelonWrapper = ({ children, className }: props) => {
  return (
    <div
      className={`p-4 rounded shadow-lg space-y-3 bg-white dark:bg-gray-800 animate-pulse ${className}`}
    >
      {children}
    </div>
  );
};

export default SketelonWrapper;
