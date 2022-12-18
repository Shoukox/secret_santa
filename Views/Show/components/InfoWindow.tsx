import React from 'react'

interface Properties{
    gifterName: string;
    receiverName: string;
}

const InfoWindow:React.FC<Properties> = ({gifterName, receiverName}: Properties) => {
  return (
    <div className="infoWindow">
        <span className="text">
            Приветствую вас, <b className="red">♂{gifterName}♂</b>.<br/>Пощекотите <b className="gachiColor">♂finger♂ом ♂ASS♂</b> вашего <b className="gachiColor">♂SLAVE♂</b> - <b className="red bigText">{receiverName}</b><br/> и порадуйте его своим  <b className="gachiColor">♂DICK♂</b> <i className="littleText">(подарком)</i>   
        </span>
    </div>
  )
}

export default InfoWindow