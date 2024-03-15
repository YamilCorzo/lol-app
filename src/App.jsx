import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'
import AllLogo from './img/AllLogo.png'
import BotLogo from './img/BotLogo.png'
import JunglaLogo from './img/JunglaLogo.png'
import MidLogo from './img/MidLogo.png'
import SuppLogo from './img/SuppLogo.png'
import TopLogo from './img/TopLogo.png'
import { ChampionsEspanish } from './data/champions_es_ES'

const BotonesData = [
  { id: 1, texto: 'Botón All', imagen: AllLogo},
  { id: 2, texto: 'Botón Bot', imagen: BotLogo},
  { id: 3, texto: 'Botón JunglaLogo', imagen: JunglaLogo},
  { id: 4, texto: 'Botón MidLogo', imagen: MidLogo},
  { id: 5, texto: 'Botón SuppLogo', imagen: SuppLogo},
  { id: 6, texto: 'Botón TopLogo', imagen: TopLogo},
];

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 4rem;
  }
`
/*const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
` 
*/
const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  text-align: center;
  background-color: #2c274f;
`

const ImagenContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;

`
const ImagenOld = styled.img`
  width: 100px; /* ajusta el tamaño según tus necesidades */
  border-radius: 50%;
`

const ChampionName = styled.p`
  font-size: 1.5em; /* Tamaño de fuente más grande para el nombre del campeón */
  font-weight: bold; /* Texto en negrita */
  margin-bottom: 5px; /* Espacio inferior más pequeño */
`

const ChampionTitle = styled.p`
  font-size: 1em; /* Tamaño de fuente más pequeño para el título del campeón */
  color: #A0A0A0; /* Cambia el color del texto del título según tus preferencias */
`

const ChampsContainer = styled.div`
  grid-column: span 4; /* Ocupa 1 fracción en la cuadrícula */
  background-color: #2c274f;
  border-radius: 10px;
  display: flex;
  flex-direction: column; /* Ajusta la dirección según sea necesario */
  justify-content: center; /* Centra horizontalmente los elementos */
  align-items: center; /* Centra verticalmente los elementos */
  @media (max-width: 430px) {
    width: 370px;
  }
`;

const InputTexto = styled.input`
  width: 90%; /* Ocupa todo el espacio horizontal */
  margin-bottom: 10px; /* Espacio inferior */
  
`;

const Boton = styled.button`
  margin: 4px; /* Espacio derecho entre botones */
  border-radius: 15px;
  background-color: #404040;
`;

const ContenedorBotones = styled.div`
  display: flex;
`;

const ContenedorImagenes = styled.div`
  display: flex;
  flex-wrap: wrap; /* Las imágenes se envolverán a la siguiente línea cuando no haya espacio */
`;

const Imagen = styled.img`
  width: 50px; /* Ajusta el tamaño de la imagen según tus necesidades */
  margin: 5px; /* Espacio entre imágenes */
`;

const NombreImagen = styled.p`
  text-align: center;
`;

const ChampsMeta = styled.div`
  grid-column: span 3; /* Ocupa 1 fracción en la cuadrícula */
  background-color: #2c274f;
`;

const ContenedorBusqueda = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBusqueda = styled.input`
  border-radius: 15px;
  border: none;
  padding: 10px;
  width: 300px;
  background-color: #2c274f;
  color: #ffffff;
  text-align: center;
  margin-right: 10px; /* Espaciado derecho opcional */
`;

const IconoBusqueda = styled.span`
  font-size: 20px;
  margin-right: 5px; /* Espaciado derecho opcional */
`;

const ImagenBoton = styled.img`
  width: 20px; /* Ajusta el tamaño de la imagen según tus necesidades */
  margin: 5px; /* Espaciado derecho opcional */

`;

function App() {

   /* const [ monedas, setMonedas ] = useState({})
  const [ resultado, setResultado ] = useState({})
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
      if(Object.keys(monedas).length > 0) {
          
        const cotizarCripto = async () => {
            setCargando(true)
            setResultado({})

            const { moneda, criptomoneda } = monedas
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            setResultado(resultado.DISPLAY[criptomoneda][moneda])

            setCargando(false)
        }

        cotizarCripto()
      }
  }, [monedas]) */

  console.log(ChampionsEspanish)

  return (
      <Contenedor>
          {/*<Imagen 
            src={ImagenCripto}
            alt="imagenes criptomonedas"
          />

          <div>
              <Heading>Cotiza Criptomonedas al Instante</Heading>
              <Formulario 
                setMonedas={setMonedas}
              />

              {cargando && <Spinner />}
              {resultado.PRICE && <Resultado resultado={resultado} />} 
          </div>*/}

          {/*{Object.keys(ChampionsEspanish[0].data).map((champKey) => {
          const champ = ChampionsEspanish[0].data[champKey];

          return (
            <Card key={champ.id}>
              <ImagenContainer>
                <Imagen
                  src={`https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${champ.image.full}`}
                  alt={champ.name}
                />
              </ImagenContainer>
              <ChampionName>{champ.name}</ChampionName>
              <ChampionTitle>{champ.title}</ChampionTitle>
            </Card>
          );
        })} */}
      <ChampsContainer>
        <ContenedorBusqueda>
          <InputBusqueda type="text" placeholder="Buscar..." />
          <IconoBusqueda>🔍</IconoBusqueda>
        </ContenedorBusqueda>
          
          <ContenedorBotones>
            {BotonesData.map((boton) => ( 
              <Boton key={boton.id}>
                  <ImagenBoton src={boton.imagen} alt={`Imagen para ${boton.texto}`}/>
              </Boton>
            )) }
          </ContenedorBotones>
          
          <ContenedorImagenes>
            
          {Object.keys(ChampionsEspanish[0].data).map((champKey) => {
          const champ = ChampionsEspanish[0].data[champKey];

          return (
              <ImagenContainer>
                <Imagen
                  src={`https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${champ.image.full}`}
                  alt={champ.name}
                />
              </ImagenContainer>
              );
          })}
          </ContenedorImagenes>
        </ChampsContainer>
      

      </Contenedor>
  )
}

export default App
