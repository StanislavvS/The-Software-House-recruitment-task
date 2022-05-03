import LoginImage from "../../../../../img/login-image.png";
import useLoginPhotoStyles from "./styles";

const LoginPhoto = () => {
  const classes = useLoginPhotoStyles();

  return (
    <div className={classes.loginPhoto}>
      <img
        className={classes.loginPhotoImage}
        src={LoginImage}
        alt="Login Page Photo"
        data-testid="login-page-image"
      />
    </div>
  );
};

export default LoginPhoto;
