// export default function onChangeSetURL(setUrlFunc: any, setLoadingFunc?: any) {
//   return async (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e?.target.files?.length) return;
//     const file = e?.target.files[0];

//     const data = await imageUpload(file, setLoadingFunc);
//     if (setUrlFunc) {
//       setUrlFunc(data?.url);
//     }
//   };
// }
