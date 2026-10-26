import "@/global.css";
import { Text, View } from "react-native";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-success">
                Welcome to Settings!
            </Text>
        </SafeAreaView>
    )
}
export default Settings
