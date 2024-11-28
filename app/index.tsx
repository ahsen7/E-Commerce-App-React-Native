import { Text, View, FlatList, StyleSheet } from "react-native";
import products from '../assets/products.json'
import ProductListItem from "../components/common/ProductListItem";
import { Button } from 'react-native-paper';
import CustomButton from "@/components/common/CustomButton";
import AwesomeButton from "react-native-really-awesome-button";
import { ThemedButton } from "react-native-really-awesome-button";


export default function HomeScreen() {
    return (
        <View>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({ item }) => <ProductListItem product={item} />}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={styles.columnWrapper}
            />
            

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        gap:10
    },
    columnWrapper:{
        gap:10
    }
})