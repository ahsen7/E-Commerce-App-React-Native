import { Slot, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import '../global.css'
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {

    return (
        <PaperProvider>
            <Stack />
        </PaperProvider>

    )


}