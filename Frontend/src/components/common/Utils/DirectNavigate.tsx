import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DirectNavigate = ({ to }: { to: string }) => {
  const n = useNavigate();
  useEffect(() => n(to), []);
  return <></>;
};

export default DirectNavigate;
