export default function LoadingScreen() {
  return (
    <div className="w-full h-screen fixed inset-0 m-auto bg-white z-[200] flex items-center justify-center">
      <div className="w-9 h-9 rounded-full border-4 border-blue-600 animate-spin border-t-transparent"></div>
    </div>
  );
}
