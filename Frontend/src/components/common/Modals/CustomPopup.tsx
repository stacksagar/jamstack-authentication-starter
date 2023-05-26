const CustomPopup = ({
  isShow,
  onClose,
  children,
}: {
  isShow: boolean;
  onClose: any;
  children: any;
}) => {
  if (!isShow) return <></>;

  return (
    <>
      <div
        onClick={onClose}
        className="bg-black bg-opacity-50 w-full h-screen fixed inset-0 m-auto z-[901]"
      ></div>

      <div className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white w-[90%] sm:w-fit h-fit rounded shadow max-h-[90vh] overflow-y-auto fixed inset-0 m-auto z-[901]">
        {children}
      </div>
    </>
  );
};

export default CustomPopup;
