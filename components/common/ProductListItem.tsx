import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useCustomFonts } from '@/hooks/useFont';



type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  onPress?: () => void;
};


type ProductListItemProps = {
  product: Product;
};


const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {

  const useFonts = useCustomFonts();
  // const handlePress = () => {
  //   Burnt.toast({
  //     title: `${product.name}`,
  //     message: `Price: $${product.price}`,
  //     preset: "done", 
  //   });
  // };
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
    // onPress={handlePress}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.img} resizeMode='contain' />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default ProductListItem

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '48%',
    marginTop: 10,
  },
  imageContainer: {
    height: 90,
    width: '100%',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '80%',
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Jakarta-Bold',
    fontSize: 12,
    marginBottom: 4,
    color: '#333',
  },
  subtitle: {
    fontFamily: 'Jakarta-Medium',
    fontSize: 12,
    color: '#777',
    marginBottom: 6,
  },
  price: {
    fontFamily: 'Jakarta-Medium',
    fontSize: 14,
    color: '#000',
  },
})