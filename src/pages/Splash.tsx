import {
  IonPage,
  IonContent,
  IonSpinner,
  IonText,
  IonFooter,
} from "@ionic/react";
import React from "react";

import StudentImg from "../assets/student.png";

const SplashScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-text-center">
        <div
          className="center column"
          style={{
            height: "80%",
          }}
        >
          <div className="center">
            <img
              src={StudentImg}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
              }}
            />
          </div>
          <IonText className="blackColor15Medium ion-margin-top">
            Student App
          </IonText>
        </div>

        <IonFooter
          className="center row ion-margin-bottom"
          style={{
            width: "100%",
          }}
        >
          <IonSpinner
            name="crescent"
            color="secondary"
            style={{ transform: "scale(2)" }}
          ></IonSpinner>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
