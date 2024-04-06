import React from "react";
import type {PropsWithChildren} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type iconsProps = PropsWithChildren<{
    name:string
}>
const Icons = ({name} : iconsProps)=>{
switch (name) {
    case 'cicle':
        return <Icon name="cicle-thin" size={38} color="#ffff"/>
        break;

    default:
        return <Icon name="pencil" size={38} color="#F7CD2E"/>
}
}
export default Icons