import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { decrypt } from '../../Encryption';
import InfoWindow from './components/InfoWindow';
import "./styles.css";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") as string;
  const key = searchParams.get("key") as string;

  console.log(name);
  console.log(key);

  return (
    <><InfoWindow gifterName={name} receiverName={decrypt(key)}/></>
  )
}

export default Index