import Cesta from "../src/telas/Cesta";
import { SafeAreaView, StatusBar, View} from "react-native";
import {useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [loaded, error]= useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratNegrito": Montserrat_700Bold 
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
