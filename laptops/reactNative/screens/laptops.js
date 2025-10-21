import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem } from "@rneui/base";
import { getAllLaptops } from "../rest-client/laptop";

export const LaptopList = () => {
  const [laptopList, setLaptopList] = useState([]);

  const LaptopItem = ({ laptop }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptop.marca} {laptop.modelo}</ListItem.Title>
          <ListItem.Subtitle>{laptop.procesador}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  const fnRefreshList = (laptops) => {
    setLaptopList(laptops);
  };

  return (
    <View>
      <Text>Lista de Laptops</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllLaptops(fnRefreshList);
        }}
      />
      <FlatList
        data={laptopList}
        renderItem={({ item }) => {
          return <LaptopItem laptop={item} />
        }}
      />
    </View>
  );
};



