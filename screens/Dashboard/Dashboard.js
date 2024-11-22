// import {StyleSheet, Text, View, Dimensions} from 'react-native';
// import Sidebar from './Sidebar';
// import Icon from 'react-native-vector-icons/Ionicons';
// // import { LineChart } from 'react-native-chart-kit';
// import React from 'react';

// const screenWidth = Dimensions.get('window').width;

// // Data for LineChart
// const data = {
//   labels: [
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//   ],
//   datasets: [
//     {
//       data: [
//         3000, 4000, 3200, 4200, 3800, 3900, 4100, 4500, 4700, 4400, 4300, 4600,
//       ],
//       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//     },
//   ],
// };

// // LineChart Component
// // const RevenueChart = () => {
// //   return (
// //     <LineChart
// //       data={data}
// //       width={screenWidth - 32}
// //       height={220}
// //       chartConfig={{
// //         backgroundColor: '#fff',
// //         backgroundGradientFrom: '#fff',
// //         backgroundGradientTo: '#fff',
// //         color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
// //       }}
// //       bezier
// //     />
// //   );
// // };

// const DashboardBox = ({title, count, icon, change}) => {
//   return (
//     <View style={styles.box}>
//       <Icon style={styles.icon} name={icon} size={24} color="#000" />
//       <Text style={styles.boxTitle}>{title}</Text>
//       <Text style={styles.boxCount}>{count}</Text>
//       <Text style={styles.boxChange}>{change}</Text>
//     </View>
//   );
// };

// const Dashboard = () => {
//   return (
//     <View style={{flexDirection: 'row', flex: 1}}>
//       <View style={styles.content}>
//         <Text style={styles.dashboardTitle}>Dashboard</Text>
//         <View style={styles.dashboardBoxes}>
//           <DashboardBox
//             title="New Orders"
//             count="136"
//             icon="cube-outline"
//             change="0.43% ↑"
//           />
//           <DashboardBox
//             title="New Customers"
//             count="78"
//             icon="people-outline"
//             change="0.39% ↑"
//           />
//           <DashboardBox
//             title="Online Orders"
//             count="795"
//             icon="globe-outline"
//             change="1.39% ↓"
//           />
//           <DashboardBox
//             title="Offline Orders"
//             count="573"
//             icon="cart-outline"
//             change="2.69% ↑"
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   content: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   icon: {
//     color: 'red',
//   },
//   dashboardTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   dashboardBoxes: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20, // Added for spacing between boxes and chart
//   },
//   box: {
//     width: '22%',
//     padding: 16,
//     backgroundColor: '#f5f7fb',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   boxTitle: {
//     fontSize: 14,
//     color: '#333',
//   },
//   boxCount: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   boxChange: {
//     color: '#28a745',
//   },
// });

// export default Dashboard;


import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Sidebar from './Sidebar';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const DashboardBox = ({title, count, icon, change, style}) => {
  return (
    <View style={[styles.box, style]}>
      <Icon style={styles.icon} name={icon} size={24} color="#000" />
      <Text style={styles.boxTitle}>{title}</Text>
      <Text style={styles.boxCount}>{count}</Text>
      <Text style={styles.boxChange}>{change}</Text>
    </View>
  );
};

const Dashboard = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 16}}>
      <View style={styles.content}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <View style={styles.dashboardBoxes}>
          <DashboardBox
            title="New Orders"
            count="136"
            icon="cube-outline"
            change="0.43% ↑"
            style={styles.box1}
          />
          <DashboardBox
            title="New Customers"
            count="78"
            icon="people-outline"
            change="0.39% ↑"
            style={styles.box2}
          />
          <DashboardBox
            title="Online Orders"
            count="795"
            icon="globe-outline"
            change="1.39% ↓"
            style={styles.box3}
          />
          <DashboardBox
            title="Offline Orders"
            count="573"
            icon="cart-outline"
            change="2.69% ↑"
            style={styles.box4}
          />
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    color: 'red',
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dashboardBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    width: '48%', // Adjusted width for two boxes per row
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16, // Added margin for spacing between rows
  },
  box1: {
    backgroundColor: '#f5f7fb',
  },
  box2: {
    backgroundColor: '#e0f7fa',
  },
  box3: {
    backgroundColor: '#ffe0b2',
  },
  box4: {
    backgroundColor: '#f1f8e9',
  },
  boxTitle: {
    fontSize: 14,
    color: '#333',
  },
  boxCount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  boxChange: {
    color: '#28a745',
  },
});

export default Dashboard;