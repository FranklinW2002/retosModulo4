import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { Button, ListItem, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest-client/laptop";

export const LaptopList = ({ navigation }) => {
  const [laptopList, setLaptopList] = useState([]);
  
  useEffect(()=>{
    getAllLaptops(fnRefreshList);
  },
    []);

  const LaptopItem = ({ laptop }) => {
    return (
      <TouchableHighlight onPress={()=>{
        navigation.navigate("laptopsFromtNav",{laptopParam:laptop});
      }
        
      }>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{laptop.marca} {laptop.modelo}</ListItem.Title>
            <ListItem.Subtitle>{laptop.procesador}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  }

  const fnRefreshList = (laptops) => {
    setLaptopList(laptops);
    console.log("Actualiza");
    console.log(laptopList);

  };

  return (
    <View>
      <Text style={styles.container}>Lista de Laptops</Text>
      
      <FlatList
        data={laptopList}
        renderItem={({ item }) => {
          return <LaptopItem laptop={item} />
        }}
      />
      <FAB
        title="+"
        onPress={() => { navigation.navigate("laptopsFromtNav",{}) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",//eje principal vertical
    alignItems: 'stretch',//eje secundario
    justifyContent: 'flex-start',//eje principal
  },
})


