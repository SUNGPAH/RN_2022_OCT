import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import WebinarDetail from "./components/pages/WebinarDetail";
import WebinarList from "./components/pages/WebinarList";

import { RecoilRoot } from 'recoil';

export default function App() {
  return <RecoilRoot><NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="WebinarList" component={WebinarList} />
      <Stack.Screen name="WebinarDetail" component={WebinarDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  </RecoilRoot>
}

