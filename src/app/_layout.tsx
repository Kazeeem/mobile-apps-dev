import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font";
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, fontError] = useFonts({
        'sans-regular': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'sans-bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'sans-medium': require('../../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'sans-semibold': require('../../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'sans-extrabold': require('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
        'sans-light': require('../../assets/fonts/PlusJakartaSans-Light.ttf')
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            console.log(fontError);
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) return null;

    return (
        <Stack screenOptions={{headerShown: false}} />
    )
}
export default RootLayout
