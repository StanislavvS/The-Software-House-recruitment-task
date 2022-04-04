import { createUseStyles } from "react-jss";

const useLoginPhotoStyles = createUseStyles({
  loginPhoto: {
    width: "30%",
    height: "100%",
  },
  loginPhotoImage: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
  },
});

export default useLoginPhotoStyles;
