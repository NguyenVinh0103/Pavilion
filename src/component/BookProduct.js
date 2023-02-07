import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Animated,
} from 'react-native';
import {colors, normalize, normalizeHorizontal} from '../helper';
import Paginator from './Paginator';
import product from '../../product';
import OnboardingItem from './OnboardingItem';

const BookProduct = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const productRef = useRef(null)

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({item}) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        ref={productRef}
      />
      <Paginator data={product} scrollX={scrollX} />
    </View>
  );
};

export const Onboarding = React.memo(OnboardingComp);

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
