import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';

type Props = {}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ProductListItem = ({product}) => {
  return (
    <Card style={styles.cardContainer}>
    <Card.Content>
      <Text variant="titleLarge" style={styles.title}>{product.name}</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>{product.description}</Text>
    </Card.Content>
    <Card.Cover source={{uri:product.image}} style={styles.img} resizeMode='contain'/>
    <Text style={styles.price}>${product.price}</Text>
  </Card>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
    title:{
        fontFamily:'Jakarta-Bold'
    },
    subtitle:{
        fontFamily:'Jakarta-Medium',
        fontSize:12
    },
    price:{
        fontSize:16,
        fontFamily:'Jakarta-Medium',
        color:'#858585',
        marginLeft:10,
        marginTop:10,
    },
    cardContainer:{
        padding:10,
        flex: 1,
        backgroundColor:'#fff',
        marginVertical:15,
        marginHorizontal:10,
    },
    img:{
        width: '100%',
        backgroundColor:"#fff"
    }
})