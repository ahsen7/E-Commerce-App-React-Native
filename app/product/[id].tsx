import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useCustomFonts } from '@/hooks/useFont'
import { useLocalSearchParams, useGlobalSearchParams, Stack } from 'expo-router'
import products from '../../assets/products.json'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useState } from 'react'
import { CustomButton } from '@/components/common/CustomButton'

type Props = {}

const ProductDetails = (props: Props) => {
  const useFonts = useCustomFonts();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isFav, toggleFav] = useState(false)

  const product = products.find((p) => p.id == Number(id))

  if (!product) {
    return <Text>Product not found</Text>
  }


  // console.log("ID from search params:", id);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        title: product.name,
        headerShadowVisible: false,
        headerBackVisible: false,
      }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.image }} style={styles.img} resizeMode="contain" />
        <SafeAreaView style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => toggleFav(!isFav)}
            style={styles.icon}
          >
            <HeartIcon size={24} color={isFav ? "red" : "white"} strokeWidth={4} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {product.name}
          </Text>
          <Text style={styles.description}>
            {product.description}
          </Text>
        </View>

      </ScrollView>
      <View style={styles.buttonContainer}>
        <Text style={styles.price}>${product.price}</Text>
        <CustomButton
          title='Add to Cart'
          color='#333'
          icon='cart'
          borderRadius={10}
          width={200}
        />
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  img: {
    width: '100%',
    height: 380,

  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',

  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Jakarta-Bold',
    fontSize: 28,
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontFamily: 'Jakarta-Medium',
    fontSize: 15,
    color: '#777',
    marginBottom: 6,
    lineHeight: 21.5,
    
  },
  textContainer: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  price: {
    fontFamily: 'Jakarta-SemiBold',
    fontSize: 24,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: "absolute", 
    bottom: 0, 
    left: 0,
    right: 0,
    backgroundColor: "#fff", 
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ccc", 
    marginBottom:30
  },
  scrollContent: {
    paddingBottom: 50,
  }
  // customButtonStyle: {
  //   backgroundColor: "#333",
  //   paddingVertical: 20,
  //   borderRadius: 30,
  // },
  // customTextStyle: {
  //   fontSize: 18,
  //   color: "#fff",
  //   fontFamily: "Jakarta-Bold",
  // },
})