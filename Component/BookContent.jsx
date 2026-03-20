import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


export default function BookContent({ bookStar, bookName, bookAuthor, bookContent, bookPic }) {

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
        <View style={{ flex: 1, backgroundColor:'#fff' }}>

            <ScrollView>
                <View style={styles.content}>
                    <Image source={bookPic} style={styles.pic} />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 20 }}>{String(bookName)}</Text>
                    <Text style={{ fontSize: 16, color: '#666666' }}>{bookAuthor}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {renderStar(bookStar)}
                        <Text style={{ paddingLeft: 10, fontSize: 16 }}>{bookStar}.0 / 5.0</Text>
                    </View>
                    <Text style={{ fontSize: 16, paddingHorizontal: 25, paddingVertical: 20, textAlign: 'center' }}>{bookContent}</Text>

                    <Pressable
                        style={{
                            backgroundColor: '#6200EE',
                            width: 260,
                            height: 56,
                            borderRadius: 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 20
                        }}
                    >
                        <Text style={{ color: '#fff', fontSize: 24 }}>Buy Now for $46.99</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <View style={styles.end}>
                <View style={styles.unericon}>
                    <Image source={require('../Pic/Icon/icon_home_actived.png')} style={{ width: 24, height: 24 }} />
                    <Text style={{ color: '#6200EE' }}>Home</Text>
                </View>
                <View style={styles.unericon}>
                    <Image source={require('../Pic/Icon/icon_nav_bookmark.png')} style={{ width: 24, height: 24 }} />
                    <Text>Wishlist</Text>
                </View>
                <View style={styles.unericon}>
                    <Image source={require('../Pic/Icon/icon_mybook.png')} style={{ width: 24, height: 24 }} />
                    <Text style={{}}>My books</Text>
                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        gap: 10,
    },
    pic: {
        width: 210,
        height: 300,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
        backgroundColor: '#fff',    // 必填！沒有背景色陰影有時會顯示不出來
        borderRadius: 8,
    },
    star: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    end: {

        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
        backgroundColor: '#fff',    // 必填！沒有背景色陰影有時會顯示不出來
        borderRadius: 8,
    },
    unericon: {
        alignItems: 'center',

    }
})