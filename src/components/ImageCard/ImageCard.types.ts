import { Image } from "../App/App.types";
export interface ImageCardProps {
  image: Image;
  handleImageClick: (image: Image) => void;
}
