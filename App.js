import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products list')}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Employees list')}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>
          Manage Employees
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Orders list')}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

function Productlist({ navigation }) {
  var productArray = [
    {
      id: 1,
      name: 'Spoilers',
      price: 2500,
      Image:
        'https://images.cars.com/cldstatic/wp-content/uploads/honda-civic-type-r-2020-21-blue--exterior--rear.jpg?w=750&q=40',
      Description:
        'Spoilers started to come into vogue in the 1960s as automakers sought to improve the aerodynamics (the management of air flowing around a vehicle) of racecars and performance vehicles. Later, federal fuel economy regulations motivated automakers to improve the aerodynamics of all vehicles to generate higher mileage ratings. A car with less wind resistance uses less fuel at highway speeds.',
    },
    {
      id: 2,
      name: 'Tyres',
      price: 46999,
      Image: 'https://static.pakwheels.com/2017/06/car-tires.png',
      Description:
        'Automotive tires are described by an alphanumeric tire code (in North American English) or tyre code (in Commonwealth English), which is generally molded into the sidewall of the tire. This code specifies the dimensions of the tire, and some of its key limitations, such as load-bearing ability, and maximum speed. Sometimes the inner sidewall contains information not included on the outer sidewall, and vice versa.',
    },
    {
      id: 3,
      name: 'Car Matts',
      price: 3500,
      Image:
        'https://www.autostore.pk/wp-content/uploads/2018/04/WhatsApp-Image-2018-04-11-at-11.22.17-PM_wm.jpg',
      Description:
        "Vehicle mats , are designed to protect a vehicle's floor from dirt, wear, and salt corrosion. One major use of a vehicle mat is to keep the car looking clean. Most mats can be easily removed for cleaning and then replaced.",
    },
    {
      id: 4,
      name: 'Car Top Covers',
      price: 4600,
      Image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAxt0cW9RMngUcVBsAG829s6NsM6gUFT6nQ&usqp=CAU',
      Description:
        'Universal Parachute Car Top Cover Medium | Full Car Cover Outdoor Snow Ice Dust Sun UV Shade Cover Auto Exterior Accessories | Water Proof | Dust Proof.',
    },
    {
      id: 5,
      name: 'Car Seat Covers',
      price: 16000,
      Image:
        'https://static.toiimg.com/thumb/msid-80511877,width-1200,height-900,resizemode-4/.jpg',
      Description:
        "Car seat covers are accessories that protect the original seat upholstery from wear and add a custom look to a vehicle's interior. They can help to maintain the resale value of the vehicle and maximize the comfort of the driver and passengers.",
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'darkred', fontSize: 30 }}>Products</Text>
      <ScrollView>
        {productArray.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() =>
              navigation.navigate('Product details', {
                pass: item.Image,
                Product: item.name,
                Price: item.price,
                Description: item.Description,
              })
            }>
            <Text style={styles.TextStyle}>
              
              <Text style={{ color: 'darkred', fontSize: 20 }}>
                {item.id}
              </Text>
            </Text>
            <Text style={styles.TextStyle}>
              <Text style={{ color: 'darkred', fontSize: 20 }}> Name :</Text>
              {item.name}
            </Text>

            <Text style={styles.TextStyle}>
              <Text style={{ color: 'darkred', fontSize: 20 }}> price :</Text>
              {item.price}
            </Text>

            <Text style={styles.TextStyle}>
              <Image style={styles.image} source={item.Image} />
            </Text>

            <View
              style={{ width: '100%', height: 1, backgroundColor: '#000' }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function Product_Details({ route, navigation }) {
  const { Description, pass, Product, Price } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'darkred', fontSize: 30 }}>Product Detail</Text>
      <Text style={styles.TextStyle}>
        <Image style={styles.image} source={{ uri: pass}} />
      </Text>

      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Product Name:</Text>
        {Product}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Price:</Text>
        {Price}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Discription:</Text>
        {Description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function Employees_List({ navigation }) {
  var EmployeeArray = [
    {
      id: 1,
      name: 'Ali',
      Salary: 70000,
      Image:
        'https://ichef.bbci.co.uk/news/976/cpsprodpb/9874/production/_89882093_89882033.jpg',
      Designation: 'Manager',
    },
    {
      id: 2,
      name: 'Umer',
      Salary: 45000,
      Image:
        'https://www.geosuper.tv/assets/uploads/updates/2020-02-18/3816_5773683_updates.jpg',
      Designation: 'Worker',
    },
    {
      id: 3,
      name: 'Hammad',
      Salary: 25000,
      Image:
        'https://i.pinimg.com/originals/54/98/9f/54989fb380389ddd0d2c7572b42fc71a.jpg',
      Designation: 'Helper',
    },
    {
      id: 4,
      name: 'Ahsan',
      Salary: 100000,
      Image:
        'https://www.bizasialive.com/wp/wp-content/uploads/2020/06/5e5f9751-ahsankhan001.jpg',
      Designation: 'DataBase',
    },
    {
      id: 5,
      name: 'Jaffar',
      Salary: 120000,
      Image: 'https://i1.sndcdn.com/avatars-000140423054-y5zylg-t500x500.jpg',
      Designation: 'Branch Manager',
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'darkred', fontSize: 30 }}>Employees</Text>
      <ScrollView>
        {EmployeeArray.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() =>
              navigation.navigate('Employee details', {
                pass: item.Image,
                Name: item.name,
                Salary: item.Salary,
                Designation: item.Designation,
              })
            }>
            <Text style={{ color: 'darkred', fontSize: 20 }}>{item.id}</Text>
            <Text style={styles.TextStyle}> Name : {item.name} </Text>

            <Text style={styles.TextStyle}> Salary : {item.Salary} </Text>

            <Text style={styles.TextStyle}>
              <Image style={styles.image} source={item.Image} />
            </Text>

            <View
              style={{ width: '100%', height: 1, backgroundColor: '#000' }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function Employee_Details({ route, navigation }) {
  const { pass, Designation, Name, Salary } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'darkred', fontSize: 30 }}>Employee Detail</Text>
      <Text style={styles.TextStyle}>
        <Image style={styles.image} source={{ uri: pass}} />
      </Text>

      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Product Name:</Text>{' '}
        {Name}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Salary:</Text>{' '}
        {Salary}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Discription:</Text>{' '}
        {Designation}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
function Orders_List({ navigation }) {
  var OrderArray = [
    {
      id: 1,
      name: ' Car Top Cover',
      Order_no: '#5568',
      Customer: 'Hammad',
      Date: '8/7/1955',
      Shipping: 'Delivered',
    },
    {
      id: 2,
      name: ' Car Seat Cover',
      Order_no: '#1687',
      Customer: 'Esfand',
      Date: '5/9/2021',
      Shipping: 'Due',
    },
    {
      id: 3,
      name: 'Spoilers',
      Order_no: '#8755',
      Customer: 'Raze',
      Date: '9/8/2280',
      Shipping: 'Due',
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'darkred', fontSize: 30 }}>Orders</Text>
      <ScrollView>
        {OrderArray.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() =>
              navigation.navigate('Order details', {
                Name: item.name,
                Order_Number: item.Order_no,
                Customer: item.Customer,
                Date: item.Date,
                Shipping: item.Shipping,
              })
            }>
            <Text style={{ color: 'darkred', fontSize: 20 }}>{item.id}</Text>
            <Text style={styles.TextStyle}> Name : {item.name} </Text>

            <Text style={styles.TextStyle}>
              {' '}
              Order Number : {item.Order_no}{' '}
            </Text>

            <View
              style={{ width: '100%', height: 1, backgroundColor: '#000' }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
function Order_Details({ route, navigation }) {
  const { Order_Number, Date, Name, Shipping, Customer } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'darkred', fontSize: 30 }}>Order Detail</Text>

      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Product Name:</Text>
        {Name}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Order Number:</Text>
        {Order_Number}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Customer Name:</Text>
        {Customer}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Date Of Order:</Text>
        {Date}
      </Text>
      <Text>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>
          Shipphing Status:
        </Text>
        {Shipping}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{ color: 'darkblue', fontSize: 20 }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products list" component={Productlist} />
      <Stack.Screen name="Product details" component={Product_Details} />
      <Stack.Screen name="Employees list" component={Employees_List} />
      <Stack.Screen name="Employee details" component={Employee_Details} />
      <Stack.Screen name="Orders list" component={Orders_List} />
      <Stack.Screen name="Order details" component={Order_Details} />
    </Stack.Navigator>
 
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',

    padding: 10,
  },

  TextStyle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
  },
  image: {
    width: 300,
    height: 200,
  },
});
