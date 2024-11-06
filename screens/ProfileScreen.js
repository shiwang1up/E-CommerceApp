import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  SafeAreaView
} from 'react-native';
const ProfileScreen = () => {
  return (
    <SafeAreaView  style={styles.safeArea}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View >
      <Text style={styles.screenTitle}>Profile</Text>
      {/* Add your profile content here */}
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
export default ProfileScreen;