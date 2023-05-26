import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  I: any;
}
export function Icon({ I }: Props) {
  return <FontAwesomeIcon icon={I} />;
}

export default Icons;
