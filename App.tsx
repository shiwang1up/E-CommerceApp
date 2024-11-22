// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Import screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import CarouselScreen from './screens/CarouselScreen';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard/Dashboard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
enableScreens();




// Stack navigator for Home tab to handle category navigation
const HomeStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ route }) => ({
          title: route.params?.category?.name || 'Category',
        })}
      />
      <Stack.Screen name="Carousel"
      component={CarouselScreen}
      options={({ route }) => ({
        title: route.params?.img?.name || 'Category',
      })}
      />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (



      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-sharp';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }else if (route.name === 'Dash') { // Added Dash condition
              iconName = focused ? 'grid' : 'grid-outline'; // Example icon
            }
             // Add this line for debugging

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >

        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Dash" component={Dashboard} />
      </Tab.Navigator>

  );
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;