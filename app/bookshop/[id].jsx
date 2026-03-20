import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookContent from "../../Component/BookContent";


export default function Book() {
    const { star, name, author, content, pic } = useLocalSearchParams();
    const router = useRouter();

    const img1 = require('../../Pic/Icon/icon_bookmark.png');
    const img2 = require('../../Pic/Icon/icon_nav_bookmark_actived.png')
    const [img, setImg] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.backicon}>
                <Pressable onPress={() => router.back()}>
                    <Image source={require('../../Pic/Icon/icon_back.png')} style={{ width: 24, height: 24 }} />
                </Pressable>
                <Pressable
                    onPress={() => setImg(!img)}
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.8 : 1
                    })}
                >
                    <Image source={img ? img2 : img1} style={{ width: 24, height: 24 }} />
                </Pressable>
            </View>

            <BookContent
                bookStar={star}
                bookName={name}
                bookAuthor={author}
                bookContent={content}
                bookPic={pic}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backicon:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingHorizontal:20,
        height:50,
        alignItems:'center'
    }
})