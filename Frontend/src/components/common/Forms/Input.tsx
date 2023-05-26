interface propTypes extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: propTypes) => {
  return (
    <input
      {...rest}
      className={`bg-white focus:outline-none text-gray-800 dark:bg-gray-700 dark:text-gray-100 sm:text-sm focus:ring-1 rounded focus:ring-primary-600 block w-full p-2.5 border dark:border-opacity-50 focus:border-primary-600 ${rest.className}
        `}
    />
  );
};

export default Input;
