interface props extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | any;
}

export default function FlexColumns({ children, className, ...props }: props) {
  return (
    <div
      {...props}
      className={`flex flex-col gap-y-1 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
