interface props extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | any;
}

export default function FlexCenter({ children, className, ...props }: props) {
  return (
    <div
      {...props}
      className={`flex items-center gap-x-1 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
