import {useState} from "react";
import {ControlledOnOff} from "./ControlledOnOff";
import {action} from '@storybook/addon-actions'


export default {
    title: 'OnOff stories',
    component: ControlledOnOff
}

export const ControlledOnOffSwitchedOn = () => <ControlledOnOff status={true} callBack={action('clicked on')}/>
export const ControlledOnOffSwitchedOff = () => <ControlledOnOff status={false} callBack={action('clicked off')}/>
export const ControlledOnOffModeChanging = () => {

    const [status, setStatus] = useState(false);

    return (
            <ControlledOnOff status={status} callBack={() => setStatus(!status)} />
        )

}
