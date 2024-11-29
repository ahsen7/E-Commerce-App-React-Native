import { Text, View, FlatList, StyleSheet } from "react-native";
import products from '../assets/products.json'
import ProductListItem from "../components/common/ProductListItem";
import { Button } from 'react-native-paper';
import CustomButton from "@/components/common/CustomButton";
import AwesomeButton from "react-native-really-awesome-button";
import { ThemedButton } from "react-native-really-awesome-button";



export default function HomeScreen() {
    return (
        <View style={styles.Container}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({ item }) => <ProductListItem product={item} />}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 5, // Add uniform padding
        paddingVertical: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        
    },
    Container: {
        flex: 1,
    }
})