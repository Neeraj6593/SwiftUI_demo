import {NavigationContainer} from '@react-navigation/native';
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import ContentForm from '../Views/ContentForm';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Content Form" component={ContentForm} />
    </Tab.Navigator>
  );
};

export default Tabs;
