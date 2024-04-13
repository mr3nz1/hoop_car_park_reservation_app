
import { Image, ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import NavigationHeader from "../components/UI/NavigationHeader";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../components/UI/CustomText";
import { RadioButton } from "react-native-paper"; 
import { useState } from "react";
import Button from "../components/UI/Button";



export default function Plan_payment() {
    const [checked, setChecked] = useState(''); 

    return (
        <>
            <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#EAEAF3' }}>
                <NavigationHeader navigation={navigator} title="Upgrade" />
                <View style={styles.container}>
                    <LinearGradient
                        colors={['#CFCBCB', '#EAEAF3', '#EAEAF3']}
                        // start={{x: 0, y: 0}}
                        // end={{x: 1, y: 1}}
                        style={{ flex: 1, borderRadius: 100 }}
                    >
                        <View style={styles.images}>
                            <Image source={require("../assets/images/payment_img_bg.png")} style={styles.image} />
                        </View>
                    </LinearGradient>
                    <View style={styles.carding}>
                        <View style={styles.cardx}>
                            <View style={styles.card1}>
                            <RadioButton
                                            value="yearly_full"
                                            status={checked === 'yearly_full' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('yearly_full')}
                                            color="#F43939"
                                            
                                        />
                                <View style={styles.cardItems}>
                                    <View style={styles.item}>
                                        <CustomText>Yearly</CustomText>
                                        <CustomText style={styles.text}>Pay for a full year</CustomText>
                                     
                                    </View>
                                    <View style={styles.money}>
                                        <CustomText style={{color:'#F43939'}}>$210/y</CustomText>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>
                            <RadioButton
                                            value="monthly"
                                            status={checked === 'monthly' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('monthly')}
                                            color="#F43939"
                                        />
                                <View style={styles.cardItems}>
                                    <View style={styles.item}>
                                        <CustomText>Monthly</CustomText>
                                        <CustomText style={styles.text}>Pay monthly, cancel anytime</CustomText>
                                       
                                    </View>
                                    <View style={styles.money}>
                                        <CustomText style={{color:'#2D2D2D'}}>$20/m</CustomText>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.buttoncontainer}>
            <Button
                            backgroundColor="white"
                            onPress={() => {

                            }}

                            style={styles.button}
                        >
                        

                            <CustomText style={{ color: '#FFFF', marginLeft: 10 }}>Make Payment</CustomText>
                           
                        </Button>

            </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#c0c0c8'
    },
    item: {

    },
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        padding: 20,
        gap: 20
    },
    images: {
        width: 200,
        height: 200,
        borderRadius: 100,
        position: 'relative',
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '70%',
        height: '70%',
        position: 'absolute',
        bottom: 30,
        right: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    carding: {
        width: '100%'
    },
    cardx: {
        flex: 1,
        padding: 10,
        gap: 20,
        width: '100%'
    },
    card1: {
        flexDirection: 'row',
        backgroundColor: '#ffff',
        borderColor: '#F43939', 
        borderWidth: 1, 
        padding: 20,
        gap: 3,
        borderRadius: 10
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#E1DBDB',
        padding: 20,
        
        borderRadius: 10
    },
    cardItems: {
        flexDirection: 'row',
        flex: 1,
        position:'relative',
        
    },
 
    money:{
color:'#F43939',
position:'absolute',
top:0,
right:0
    },
    buttoncontainer:{
paddingRight:25,
paddingLeft:25
    },
    button:{
        backgroundColor:'#081024'
    }
})
