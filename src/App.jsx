
import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react';
import './App.css'

function App() {


  return (
    <>
    <p>QR MY FB PROFILE</p>
    <QRCodeCanvas value="https://www.facebook.com/Rezaualsunny/" size='256' />,
    </>
  )
}

export default App
