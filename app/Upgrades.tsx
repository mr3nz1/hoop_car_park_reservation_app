import { Text, ScrollView, View, StyleSheet, Dimensions,FlatList } from "react-native";
import Carousel from 'react-native-snap-carousel';
import data from "../components/data";
import CustomText from "../components/UI/CustomText";
import { useState } from "react";
import Button from "../components/UI/Button";
import { Checkbox } from 'react-native-paper'; 
import NavigationHeader from "../components/UI/NavigationHeader";
import { Link } from "expo-router";


export default function Upgrades() {
    const [checked, setChecked] = useState(false);
    const { width: ScreenWidth } = Dimensions.get('window');
    const sliderWidth = ScreenWidth;
    const items = sliderWidth * 0.8;

    const renderItem = ({ item }: any) => (
        <>
        
        <ScrollView style={styles.itemsContainer}>
           
            <View style={styles.container}>
                <CustomText style={styles.heads}>Pro</CustomText>

                <View style={styles.singleItems}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color="#F43939"/>
                <CustomText style={styles.itemTitle}>{item.title}</CustomText>
                </View>


                <View style={styles.singleItems}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color="#F43939"/>
                <CustomText style={styles.itemDescription}>{item.include}</CustomText>
                </View>


                <View style={styles.singleItems}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color="#F43939"/>
                <CustomText style={styles.itemDescription}>{item.unlimited}</CustomText>
                </View>

                <View style={styles.singleItems}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color="#F43939"/>
                <CustomText style={styles.itemDescription}>{item.discount}</CustomText>
                </View>
                
                <View style={styles.singleItems}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color="#F43939"/>
                <CustomText style={styles.itemDescription}>{item.include}</CustomText>
                </View>

                <View style={styles.singleItems}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color="#F43939" />
                <CustomText style={styles.itemDescription}>{item.include}</CustomText>
                </View>
                <View style={styles.singleItems}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} color="#F43939"/>
                <CustomText style={styles.itemDescription}>{item.include}</CustomText>
                </View>
            </View>
        </ScrollView>
        
        </>
       
    );
    
    return (
        <>
        <ScrollView style={styles.containerx}>
            <Link href={'/Plan_payment'}>Plan_payment</Link>
        <NavigationHeader navigation={navigator} title="Upgrade" />
            <View>
                <CustomText style={styles.topHead}>Get all the facilities by upgrading your account</CustomText>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="center"
                bounces={false}
                keyExtractor={(item) => item.id.toString()} 
            />
            <View style={styles.buttoncontainer}>
            <Button
                            backgroundColor="white"
                            onPress={() => {

                            }}

                            style={styles.button}
                        >
                        

                            <CustomText style={{ color: '#FFFF', marginLeft: 10 }}>Choose Plan</CustomText>
                           
                        </Button>

            </View>
            
        </ScrollView>
       
        </>
    );
}

const styles = StyleSheet.create({
    itemsContainer: {
padding:10
    },
    heads: {
        textAlign: 'center',
        fontSize: 22,
        padding: 20
    },
    containerx:{
flex:1,

    },
    container: {
        borderRadius: 20,
        backgroundColor: '#FFFF',
      
        padding: 20,
        height: 350,
        justifyContent:'center'
    },
    itemTitle: {
        fontSize: 16,
        // flex:0.3,
        alignItems:'center'
    },
    itemDescription: {
        fontSize: 16
    },
    topHead: {
        fontSize: 24,
        textAlign: 'center',
        padding: 14
    },
    singleItems:{
       flexDirection:'row',
       alignItems:'center'

    },
    buttoncontainer:{
        paddingTop:35,
        paddingBottom:30,
        paddingLeft:20,
        paddingRight:20

    },
    button:{
backgroundColor:'#081024',
color:'#FFFF'
    }
});
