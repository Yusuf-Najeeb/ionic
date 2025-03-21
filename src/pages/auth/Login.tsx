import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonText,
  IonToolbar,
  IonFooter,
  IonIcon,
} from "@ionic/react";
import { mailOutline, lockClosedOutline } from "ionicons/icons";
import { isPlatform } from "@ionic/react";
import { useHistory } from "react-router-dom";
import LoginImg from "../../assets/login.png";
import Googlelogo from "../../assets/google.png";
import Facebooklogo from "../../assets/facebook.png";

const Login: React.FC = () => {
  const [rememberPwd, setRememberPwd] = useState(false);
  const history = useHistory();

  console.log(history);
  return (
    <IonPage>
      <IonHeader translucent={false} mode="ios" className="ion-no-border">
        <IonToolbar> </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div
          className="center column"
          style={{
            margin: "30px 16px ",
          }}
        >
          <img
            src={LoginImg}
            style={{
              width: "170px",
              height: "130px",
              objectFit: "contain",
            }}
          />
          <IonText
            className="primaryColor20SemiBold"
            style={{
              marginTop: "30px",
            }}
          >
            Welcome Log In
          </IonText>
          <IonText
            className="grayColor13Regular"
            style={{
              marginTop: "8px",
            }}
          >
            Please Login to Continue Using our app
          </IonText>
        </div>

        <div className="rowAlignCenter inputFieldWrapper ion-padding">
          <div style={{ width: "20px", height: "20px" }}>
            <IonIcon
              slot="start"
              icon={mailOutline}
              color="dark"
              size="40"
            ></IonIcon>
          </div>
          <IonInput
            mode="ios"
            placeholder="Email"
            type="email"
            className="blackColor14Medium"
            style={{
              height: "20px",
              minHeight: "20px",
              fontSize: isPlatform("ios") ? "14px" : "16px",
            }}
          ></IonInput>
        </div>

        <div className="rowAlignCenter inputFieldWrapper ion-padding">
          <div style={{ width: "20px", height: "20px" }}>
            <IonIcon
              slot="start"
              icon={lockClosedOutline}
              color="dark"
              size="40"
            ></IonIcon>
          </div>
          <IonInput
            mode="ios"
            placeholder="Password"
            type="password"
            style={{
              height: "20px",
              minHeight: "20px",
              fontSize: isPlatform("ios") ? "14px" : "16px",
            }}
            className="blackColor14Medium"
          ></IonInput>
        </div>

        <div className="rowAlignCenter" style={{ margin: "10px 20px" }}>
          <div className="rowAlignCenter" style={{ flex: 1 }}>
            <div
              onClick={() => setRememberPwd(!rememberPwd)}
              className="center circle15"
              style={{ border: "1.2px solid var(--ion-color-medium)" }}
            >
              {rememberPwd && (
                <div
                  className="circle8"
                  style={{ backgroundColor: "var(--ion-color-medium)" }}
                ></div>
              )}
            </div>
            <IonText
              className="grayColor13Regular ellipseText"
              style={{ flex: 1, WebkitLineClamp: 1, marginLeft: "8px" }}
            >
              Remember Me
            </IonText>
          </div>
          <IonText className="blackColor13Medium">Forget Password?</IonText>
        </div>

        <div
          // onClick={() => history.push("/auth/signup")}
          className="center commonButton ion-margin"
        >
          <IonText className="whiteColor17Bold"> Log In </IonText>
        </div>

        <div className="rowAlignCenter ion-margin">
          <div className="rowAlignCenter center googleFacebookButton ion-margin-end">
            <img
              src={Googlelogo}
              style={{
                width: "26px",
                height: "26px",
                objectFit: "contain",
              }}
            />
            <IonText
              className="blackColor14Medium ellipseText"
              style={{ WebkitLineClamp: 1, marginLeft: "10px" }}
            >
              Google
            </IonText>
          </div>

          <div className="rowAlignCenter center googleFacebookButton ion-margin-start">
            <img
              src={Facebooklogo}
              style={{
                width: "26px",
                height: "26px",
                objectFit: "contain",
              }}
            />
            <IonText
              className="blackColor14Medium ellipseText"
              style={{ WebkitLineClamp: 1, marginLeft: "10px" }}
            >
              Facebook
            </IonText>
          </div>
        </div>

        <IonFooter
          color="--ion-dark-contrast"
          className="ion-no-border"
          mode="ios"
        >
          <IonText className="grayColor14Regular center margin20">
            Don’t have an account?
            <IonText className="primaryColor14Medium ion-margin-start">
              Sign Up
            </IonText>
          </IonText>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Login;
