import { useState, useEffect } from "react";
import { IonPage } from "@ionic/react";
import SplashScreen from "./Splash";
import Login from "./auth/Login";
const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <IonPage>{showSplash ? <SplashScreen /> : <Login />}</IonPage>;
};

export default Home;
