interface Props {
  children: React.ReactNode;
}
export default function RegularTableHeader({ children }: Props) {
  return <div className="py-3 px-4">{children}</div>;
}
