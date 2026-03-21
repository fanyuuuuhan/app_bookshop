import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";



export default function BookItem({ book }) {
    const router = useRouter();

    const renderStar = (star) => {
        if (!star) return null; //沒有星星就不顯示

        const stars = [];
        const totalStar = 5;
        const nowStar = parseInt(star); // 確保是數字

        for (let i = 1; i <= totalStar; i++) {
            stars.push(
                <Image
                    key={i}
                    source={i <= nowStar ? require('../Pic/Icon/icon_star_filled.png') : require('../Pic/Icon/icon_star_empty.png')}
                    style={styles.star}
                />
            )

        }
        return stars;
    }

    return (
        <Pressable
            onPress={() => {
                router.push({
                    pathname: `/bookshop/${book.id}`,
                    params: {
                        name: book.name,
                        author: book.author,
                        pic: book.pic,
                        star: book.star,
                        content: book.content
                    }
                });
            }}
            style={{
                margin: 10,

            }}

        >
            <View style={styles.pic}>
                <Image
                    source={book.pic}
                    style={{
                        width: 140,
                        height: 200,
                    }}
                />
            </View>
            <View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    {renderStar(book.star)}
                </View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 10 }}>{book.name}</Text>
                <Text style={{ fontSize: 12, color: '#666666', paddingTop: 5 }}>{book.author}</Text>
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    star: {
        width: 14,
        height: 14,
        marginRight: 5
    },
    pic: {
        shadowColor: '#414144',
        shadowOffset: {
            width: 0,
            height: 16,
        },
        shadowRadius: 16,
        shadowOpacity: 0.1,
        backgroundColor: '#fff',
        borderTopEndRadius: 10,
        borderEndEndRadius: 10,
        elevation: 8,
    },
})