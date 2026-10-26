import "@/global.css";
import { Text, View } from "react-native";
import {useLocalSearchParams} from "expo-router";

const SubscriptionId = () => {
    const { id } = useLocalSearchParams();

    return id;
}
export default SubscriptionId
