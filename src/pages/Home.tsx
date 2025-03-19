import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import { calculatorOutline, trashBinOutline } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">BMI Checker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <p className="ion-padding ion-text-center">
          Add your weight in Kilogram (kg) and height in Meters (m) to calculate
          your Body Mass Index
        </p>
        <IonGrid>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <IonInput
                color="secondary"
                label="Weight"
                labelPlacement="floating"
                placeholder="kg"
              ></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonInput
                color="secondary"
                label="Height"
                labelPlacement="floating"
                placeholder="cm"
              ></IonInput>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center ion-margin-top">
            <IonCol>
              <IonButton
                style={{ minWidth: "50%" }}
                className="ion-margin-top ion-text-capitalize"
                color="primary"
                fill="solid"
              >
                <IonIcon
                  slot="start"
                  icon={calculatorOutline}
                  color="success"
                ></IonIcon>
                Calculate
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                style={{ minWidth: "50%" }}
                className="ion-margin-top ion-text-capitalize"
                color="primary"
                fill="outline"
              >
                <IonIcon
                  slot="start"
                  icon={trashBinOutline}
                  color="success"
                ></IonIcon>
                Clear
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
