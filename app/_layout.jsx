import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack screenOptions={{
            // 將標題設為空字串，這會隱藏文字但保留返回按鈕
            headerTitle: "",
            // 如果你想讓標題欄背景透明或隱藏陰影，可以加上：
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="bookshop/[id]" 
               options={{ headerShown: false }}
            />
        </Stack>
    )
}