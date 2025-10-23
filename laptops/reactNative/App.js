import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopList} from "./screens/LaptopsList"
import {LaptopsFrom} from "./screens/LaptopsFrom"

const StackLaptops = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName="laptopsListNav">
        <StackLaptops.Screen name="laptopsListNav"
        component={LaptopList}/>
        <StackLaptops.Screen name="laptopsFromtNav"
        component={LaptopsFrom}/>
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}

