import { Stack } from "expo-router";
import { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookItem from "../Component/BookItem";

const popularBook = [
  {
    id: '1',
    name: 'Fashionopolis',
    author: 'Dana Thomas',
    pic: require('../Pic/Book/img_book_fashinopolis.png')
  },
  {
    id: '2',
    name: 'Chanel',
    author: 'Patrick Mauriès',
    pic: require('../Pic/Book/img_book_chanel.png')
  },
  {
    id: '3',
    name: 'Calligraphy',
    author: 'June & Lucy',
    pic: require('../Pic/Book/img_book_calligraphy.png')
  },
]
const newBook = [
  {
    id: '1',
    star: '4',
    name: 'Yves Saint Laurent',
    author: 'Suzy Menkes ',
    pic: require('../Pic/Book/img_book_ysl.png'),
    content: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.'
  },
  {
    id: '2',
    star: '3',
    name: 'The Book of Signs',
    author: 'Rudolf Koch ',
    pic: require('../Pic/Book/img_book_tbos.png')
  },
  {
    id: '3',
    star: '3',
    name: 'Stitched Up',
    author: 'Tansy E. Hoskins',
    pic: require('../Pic/Book/img_book_stitchedup.png')
  },
]

export default function Page() {
  const [pBook] = useState(popularBook);
  const [nBook] = useState(newBook);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ headerShown: false, }} />
      <View style={styles.header}>
        <Image source={require('../Pic/Icon/icon_menu.png')} style={{ width: 24, height: 24 }} />
        <Image source={require('../Pic/Icon/icon_search.png')} style={{ width: 24, height: 24 }} />
      </View>
      <ScrollView>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 25 }}>Popular Books</Text>
        <FlatList
          data={pBook}
          renderItem={({ item }) => <BookItem book={item} />}
          horizontal={true}             // 開啟橫向排列
          showsHorizontalScrollIndicator={false} // 隱藏橫向捲動條
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 25 }}>Newest</Text>
        <FlatList
          data={nBook}
          renderItem={({ item }) => <BookItem book={item} />}
          horizontal={true}             // 開啟橫向排列
          showsHorizontalScrollIndicator={false} // 隱藏橫向捲動條
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
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
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  header: {
    width: 'auto',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  list: {
    padding: 16,
  },
  end: {
    width: 'auto',
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
    backgroundColor: '#fff', 
    borderRadius: 8,
    elevation: 8,
  },
  unericon: {
    alignItems: 'center',

  }
});
