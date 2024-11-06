import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,Platform
} from 'react-native';
const CartScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View >
      <Text style={styles.screenTitle}>Cart</Text>
      {/* Add your cart content here */}
    </View>
    </SafeAreaView>
  );
};
const { width } = Dimensions.get('window');
const itemSpacing = 12;
const columnWidth = (width - 48 - itemSpacing) / 2;

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding:12
  },
});

export default CartScreen;