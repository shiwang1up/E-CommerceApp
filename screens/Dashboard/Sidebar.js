import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Sidebar = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fc', padding: 16 }}>
      <Text style={styles.menuItem}>Home</Text>
      <Text style={styles.menuItem}>Dashboard</Text>
      <Text style={styles.menuItem}>Categories</Text>
      <Text style={styles.menuItem}>Product</Text>
      <Text style={styles.menuItem}>Customer</Text>
      <Text style={styles.menuItem}>Calendar</Text>
      <Text style={styles.menuItem}>Static</Text>
      {/* Add any other items you need */}
      <View style={styles.profileSection}>
        <Text>Musharof</Text>
        <Text style={styles.email}>hello@tailgrids.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  profileSection: {
    position: 'absolute',
    bottom: 20,
    left: 16,
  },
  email: {
    color: '#888',
  },
});

export default Sidebar;
