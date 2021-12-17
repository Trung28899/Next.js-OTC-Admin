import { useState } from "react";
import classes from "../styles/indexStyle.module.css";
import Title from "../components/UI/Typography/Title";
import TextArea from "../components/UI/TextArea/TextArea";
import Button from "../components/UI/Button/Button";
import ErrorBadge from "../components/UI/BigBadge/ErrorBadge";
import Loader from "../components/UI/Loader/Loader";
import { useRouter } from "next/router";
import { createUserAxios } from "../utilities/api_helper/admin";
import { signInUserAxios } from "../utilities/api_helper/admin";
import { useUpdateState } from "../context/AppContext";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { admin } = useUpdateState();
  const { setUserName, setFullName, setIsLoggedIn } = admin;

  const setOnChangeValue = (value) => {
    if (error) setError("");
    return setValue(value);
  };

  const loginHandler = async () => {
    if (!value) return alert("No User Name Is Entered");
    setLoading(true);
    const result = await signInUserAxios(value);
    setLoading(false);

    if (!result.success) return setError(result.message);

    setUserName(value);
    setFullName(result.fullName);
    setIsLoggedIn(true);
    return router.push("/dashboard");
  };

  const addUser = async () => {
    if (!value) return alert("No User Name Is Entered");
    setLoading(true);
    const result = await createUserAxios(value);
    setLoading(false);

    if (!result.success) return setError(result.message);

    return alert("User Added Successfully !!");
  };

  return (
    <div className={classes.wrapper}>
      <img className={classes.bgImg} src="/image.jpeg" alt="" />
      <div className={classes.container}>
        <Title white fontSize="1.5rem">
          Welcome To ONTHECARD's
        </Title>
        <Title white fontSize="1.5rem">
          Administrative Portal
        </Title>
        <div className={classes.loginForm}>
          {error && (
            <div className={classes.badgeContainer}>
              <ErrorBadge message={error} />
            </div>
          )}
          <TextArea
            bold
            rows={1}
            cols={30}
            placeHolder="Enter Your Username..."
            fontSize="0.95rem"
            lowerCase
            value={value}
            setValue={setOnChangeValue}
          />
          <Button
            glow
            borderWhite
            black
            marginTop="25px"
            onClick={loginHandler}
          >
            Sign In
          </Button>
          {/* <Button glow borderWhite black marginTop="25px" onClick={addUser}>
            Create New User
          </Button> */}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}
