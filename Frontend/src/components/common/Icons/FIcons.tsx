import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as FIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  I: any;
}
export function Icon({ I }: Props) {
  return <FontAwesomeIcon icon={I} />;
}

export const FBrands = Brands;
export default FIcons;
