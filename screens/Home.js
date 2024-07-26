import { FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes'
    );
    const palettes = await result.json();
    if (result.ok) {
      setPalettes(palettes);
    }
  });

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  return (
    <FlatList
      style={styles.list}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPallete', item)}
          colorPalette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
