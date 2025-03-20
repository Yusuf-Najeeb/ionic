import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" className="ion-text-center">
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2>Body Mass Index (BMI)</h2>
        <p>
          Body Mass Index (BMI) is a widely used measure to assess whether a
          person’s weight is appropriate for their height. It's a quick
          screening tool for identifying potential weight-related health risks
          but doesn’t provide a full picture of overall health.
        </p>

        <h2>How is BMI Calculated</h2>
        {/* <p>
          BMI is calculated using a simple mathematical formula:
          <span>Metric Formula:</span>
          BMI = weight in kilograms ( height in meters ) 2
          <span>Imperial Formula:</span>
          BMI = weight in pounds × 703 ( height in inches ) 2
          <span>Example: If</span>
          someone weighs 70 kg and their height is 1.75 m: $$ \text{BMI} = \frac
          {70}
          {1.75 ^ 2} = \frac{70}
          {3.0625} \approx 22.86 $$
        </p> */}
      </IonContent>
    </IonPage>
  );
};

export default About;
