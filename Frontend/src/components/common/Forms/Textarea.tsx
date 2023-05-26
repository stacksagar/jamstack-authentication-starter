interface props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ...rest }: props) => {
  return (
    <textarea
      {...rest}
      className={`bg-white focus:outline-none text-gray-800 dark:bg-gray-700 dark:border-opacity-50 dark:text-gray-100 sm:text-sm focus:ring-1 rounded focus:ring-primary-600 block w-full p-2.5 border focus:border-primary-600 min-h-[120px] ${rest.className}

  `}
    ></textarea>
  );
};

export default Textarea;
