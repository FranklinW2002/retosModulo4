import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {LaptopList} from "./screens/laptops"


const StackLaptops = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen name="laptopsListNav"
        component={LaptopList}/>
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}

