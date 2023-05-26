interface Props {
  children: React.ReactNode;
}

export default function ApplicationWrapper({ children }: Props) {
  return <main>{children}</main>;
}
