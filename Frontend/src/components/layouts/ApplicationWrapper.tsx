interface Props {
  children: React.ReactNode;
}

export default function ApplicationWrapper({ children }: Props) {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      {children}
    </main>
  );
}
