import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different color
        </Text>

        <ColorBox colorName={'Cyan'} hexCode={'#2aa198'} />
        <ColorBox colorName={'Blue'} hexCode={'#268bd2'} />
        <ColorBox colorName={'Magenta'} hexCode={'#d33682'} />
        <ColorBox colorName={'Orange'} hexCode={'#cb4b16'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: 'fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
