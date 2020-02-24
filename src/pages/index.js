import React, { useEffect } from "react";

export default () => {

    useEffect(() => {
        console.log("Componente montou.")
    }, []);

    return (
        <main className='container'>
            <h2>Olá mundo mano como assim</h2>
        </main>
    );
}
