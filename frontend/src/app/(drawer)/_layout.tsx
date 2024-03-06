import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerContentStyle: {
            backgroundColor: "#13141C",
          },
          sceneContainerStyle: {
            backgroundColor: "#13141C",
          },
          drawerLabel: ""
        }}
      >
        <Drawer.Screen
          name="communityDetail/[name]" // This is the name of the page and must match the url from root
          options={
            {
              // title: 'overview',
            }
          }
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
