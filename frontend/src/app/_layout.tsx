import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import { mainnet, polygon, arbitrum } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from "@web3modal/wagmi-react-native";
import { PortalProvider } from "@gorhom/portal";
import "../global.css";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "faacd6df1eda3779a685e127d4cac05a";

// 2. Create config
const metadata = {
  name: "Web3Modal RN",
  description: "Web3Modal RN Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

export default function Layout() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <PortalProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#13141C",
            },
          }}
          initialRouteName="index"
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(drawer)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="appDetail/[name]"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="liveSection/[name]"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="profile"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="createProposal"
            options={{
              headerLeft: () => {
                return (
                  <View className="flex-row items-start">
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                    <Text className="text-white text-[19px] font-semibold">
                      Proposal
                    </Text>
                  </View>
                );
              },
            }}
          />
        </Stack>
      </PortalProvider>
      <Web3Modal />
    </WagmiConfig>
  );
}
