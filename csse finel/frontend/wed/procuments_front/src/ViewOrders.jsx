import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders when the component mounts
    fetch('http://10.0.2.2:3000/order/')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
    <View>
      <Text>Available Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OrdersScreen;
