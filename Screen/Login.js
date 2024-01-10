
import {Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors'
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/Button';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
       <View style={{ flex: 1, marginHorizontal: 22 }}>
       <View style={{ marginVertical: 22 }}>
                <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        LOGIN !
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>

                        <TextInput
                        eholder='Enter your email address'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={{
                            width: "100%"
                        }}
                    />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                        placeholder='Enter your password'
                        placeholderTextColor={COLORS.black}
                        secureTextEntry={isPasswordShown}
                        style={{
                            width: "100%"
                        }}
                        />
                        <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: "absolute",
                            right: 12
                        }}>
                            {
                            isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                
               <Button
                 title="Log In"
                 filled
                 onPress={()=>navigation.navigate("Home")}

                 style={{
                     marginTop: 18,
                     marginBottom: 4,
                     width: "100%"
                 }} />

                 
            </View>
        </SafeAreaView>
    )

}
export default Login