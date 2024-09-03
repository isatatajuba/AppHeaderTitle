import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View } from 'react-native';


const Stack = createNativeStackNavigator();

function HomeScrenn(){
  return (
    ‹View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      ‹Text>Customizar para Azul</Text>
    </View>
  );
    
}

function App() {
  return (
    ‹NavigationContainer>
      ‹Stack Navigator>
        < Stack.Screen 
        name="Home"
        component={ HomeScreen}
        options={{ title: 'Principal' }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
