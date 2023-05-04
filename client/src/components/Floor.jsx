

const Floor = () => {
  return (
    <mesh position-z={-0.5} position-y={-0.1} receiveShadow>
      <circleGeometry args={[1]}/>
      <meshStandardMaterial color={'#fff'}/>
    </mesh>
  )
}

export default Floor;