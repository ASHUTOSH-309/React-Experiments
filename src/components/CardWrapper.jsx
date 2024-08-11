function CardWrapper({ innerComponent }) {

    return <div style={{ border: "2px solid red" }}>

        <innerComponent />


    </div>
}

export default CardWrapper;