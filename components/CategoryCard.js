import React from 'react'
import { Text, TouchableOpacity, View,Image } from 'react-native'

function CategoryCard({category,styles,handleCategoryPress}) {
  return (
    <TouchableOpacity
        style={styles.categoryItem}
        activeOpacity={0.7}
        onPress={() => handleCategoryPress(category)}
        >
        <View style={styles.categoryImageContainer}>
            <Image
            source={{ uri: category.image }}
            style={styles.categoryImage}
            resizeMode="cover"
            />
            <View style={styles.categoryOverlay} />
            <View style={styles.categoryNameContainer}>
            <Text style={styles.categoryName}>{category.name}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard