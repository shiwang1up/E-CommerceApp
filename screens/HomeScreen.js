import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';
import CarouselView from './CarouselView';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/CategoryData';

const HomeScreen = ({ navigation }) => {
  

  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category });
  };

  return (
    <ScrollView style={styles.scrollViewContent}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* <Image
      source={{ uri: 'https://img.freepik.com/free-vector/flat-design-realistic-landing-page-template_23-2150102697.jpg' }}
      style={styles.bannerImage}
      resizeMode="cover"
    /> */}
    <CarouselView/>
      
      
      <View style={styles.categoriesSection}>
        
        
        <Text style={styles.sectionTitle}>Explore Categories</Text>
        
        
        <View showsVerticalScrollIndicator={false}>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <CategoryCard 
              key={category.id}
              category={category}
              styles ={styles}
              handleCategoryPress = {handleCategoryPress}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const itemSpacing = 15;
const columnWidth = (width - 40 - itemSpacing) / 2;

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginTop: 40,
  },
  categoriesSection: {
    flex: 1,
    paddingTop: 16,
  },
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
    color: '#333',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: itemSpacing,
  },
  categoryItem: {
    width: columnWidth,
    marginBottom: itemSpacing,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    backgroundColor: '#fff',
  },
  categoryImageContainer: {
    width: '100%',
    height: 150, 
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)', // Subtle overlay
    borderRadius: 25,
  },
  categoryNameContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;