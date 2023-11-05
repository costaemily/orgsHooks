import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Star} from './Star';

export function Stars({
  quantity: oldQuantity,
  editable = false,
  large = false,
}) {
  const [quantity, setQuantity] = useState(oldQuantity);

  const RenderStars = () => {
    const listStars = [];
    for (let i = 0; i < 5; i++) {
      listStars.push(
        <Star
          key={i}
          onPress={() => setQuantity(i + 1)}
          desabled={!editable}
          full={i < quantity}
          large={large}
        />,
      );
    }
    return listStars;
  };

  return (
    <View style={styles.starContainer}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    gap: 2,
  },
});
