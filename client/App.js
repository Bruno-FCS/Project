import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Product from "./screens/Product";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const headerOptions = ({ navigation, route }) => ({
    headerStyle: { backgroundColor: "#2196f3" },
    headerTintColor: "white",
    headerTitleAlign: "center",
    headerRight: () => {
      return (
        <Button title="Loging" onPress={() => navigation.navigate("Login")} />
      );
    },
  });

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Group screenOptions={headerOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
