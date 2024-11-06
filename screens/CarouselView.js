import { View, StyleSheet, Dimensions, Text, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import Carousel from 'pinar';
import { StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const images = [
  { 
    id:1,
    name: 'Fashion Hub',
    img: 'https://img.freepik.com/premium-photo/business-owner-working-online-shopping-sme-entrepreneur_135649-552.jpg?ga=GA1.1.1208558747.1730180935&semt=ais_siglip',
  },
  {
    id:2,
    name: 'Laptops&Phones',
    img: 'https://img.freepik.com/premium-photo/shopping-mall-online-laptop-with-delivery-man-cup-coffee_262243-19.jpg?ga=GA1.1.1208558747.1730180935&semt=ais_siglip',
  },
  { 
    id:3,
    name: '',
    img:'https://img.freepik.com/premium-photo/shopping-line-online-store-website-application-background-digital-marketing-shop-concept-3d-illustration_250043-232.jpg?ga=GA1.1.1208558747.1730180935&semt=ais_siglip' ,
  },
  { 
    id:4,
    name: 'kitchen',
    img: 'https://img.freepik.com/premium-photo/smartphone-with-green-vegetables-wooden-table-with-shopping-trolley-food-ordering-through-mobile-cell-phone-application-concept_118925-1548.jpg?ga=GA1.1.1208558747.1730180935&semt=ais_siglip',
  },
  { 
    id:5,
    name: 'Fashion Hub',
    img: 'https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?ga=GA1.1.1208558747.1730180935&semt=ais_siglip',
  }
  
];

const height = Dimensions.get('window').height;
const marginTop = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 0;;
export default function CarouselView() {
  const navigation = useNavigation();

  const handleImagePress = (img) => {
    navigation.navigate('Carousel', { img });
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        style={styles.carousel}
        showsControls={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={[styles.dotStyle, { backgroundColor: 'white' }]}
      >
        {images.map((img) => (
           <TouchableOpacity key={img.id} onPress={() => handleImagePress(img)}>
           <Image style={styles.image} source={{ uri: img.img }} />
         </TouchableOpacity>
        ))}
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: 'silver',
    marginHorizontal: 3,
    borderRadius: 3,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  carousel: {
    height: '100%',
    width: '100%',
  },
  carouselContainer: {
    height: (height - marginTop) / 3.5,
    // marginTop,
  },
});