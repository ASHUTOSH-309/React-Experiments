function CardWrapper({ InnerComponent }) {

    return <div style={{ border: "2px solid red" }}>

        <InnerComponent />


    </div>
}

export default CardWrapper;