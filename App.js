import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPallete from './screens/ColorPallete';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={Home} />
      <MainStack.Screen
        name='ColorPallete'
        component={ColorPallete}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode='modal'>
        <RootStack.Screen
          name='Main'
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='ColorPaletteModal'
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
