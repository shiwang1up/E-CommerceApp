import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { categories, products } from '../data/CategoryData';

const Product = ({image,name,price})=>{
  return(
  <View >
    <Image 
    source={{ uri: image }} 
    style={styles.productImg} 
    />
    <Text style={styles.producttxt}>{name} </Text>
    <Text style={{marginBottom:10}}> Price:{price}</Text>
  </View>)

}
const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  
  return (
    <ScrollView style={styles.screenContainer}>
      {
        products.filter(
          item => item.categoryName===category.name
        )
        .map(item => 
          <Product key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          style={styles.productcard}/>
        )
      }
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const itemSpacing = 12;
const columnWidth = (width - 48 - itemSpacing) / 2;

const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
    backgroundColor: '#ececec',
    
  },
  categoryDetailImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  categoryDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  productImg:{
    height:400,
    width:'100%',
    borderRadius: 10,
    marginBottom: 16, 
  },
  producttxt:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:8
  },
  productcard:{
    flexDirection:'row'
  }
});

export default CategoryScreen;