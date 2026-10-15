import { useState } from "react"
import { motion } from "motion/react"

/*const colores = [
    "bg-amber-300",
    "bg-red-300",
    "bg-fuchsia-500",
    "bg-green-300",
    "bg-yellow-300",
    "bg-violet-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
  ];*/
  const coloresHex = [
  "#BF2446", 
  "#BF5024",  
  "#BF9D24", 
  "#24BFAA", 
  "#2486BF", 
  "#2439BF", 
  "#9D24BF", 
  "#BF2493", 
  "#BF2446", 
  "#46BF24", 
];


export default function App() {
 
  const[fondo, fondoCambiado] = useState(coloresHex[0])

  /*function colorAleatorio() {
    const randomIndex = Math.floor(
      Math.random() * colores.length
    );
    fondoCambiado(colores[randomIndex]);
  }*/

    /* function listaColor(){
    const colorCambiado = colores.indexOf(fondo) + 1;
    return fondoCambiado(colores[colorCambiado]);
  }*/
  function listaColor(){

    const indiceActual = coloresHex.indexOf(fondo);
    const indiceCambiado = (indiceActual + 1) % coloresHex.length;
    return fondoCambiado(coloresHex[indiceCambiado]);
  }
  return (
    
    <motion.div 
    initial={{backgroundColor: fondo}}
    transition={{duration: 1.5 }}
    animate={{
      backgroundColor: fondo}}
       className={` flex justify-center items-center w-full h-full`}>
      <motion.button whileTap={{ scale: 2 }} className="px-6 py-3 bg-black hover:bg-gray-700 text-white font-medium rounded-4xl shadow-md transition-colors cursor-pointer" onClick={listaColor}>
        <span>cambiar color</span>
      </motion.button>
    </motion.div>
  )
}