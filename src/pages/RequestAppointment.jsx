import { useState } from "react";

export function RequestAppointment(){
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const clearForm = () => {
        setName("");
        setLastName("");
        setEmail("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Se envio un correo a su email");
        clearForm();
        
    }
    return(
        <section>
            <form onSubmit={handleSubmit}>
                <label>Nomber *</label>
                <input 
                    placeholder="Nombre" 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Apellido *</label>
                <input 
                    placeholder="Apellido" 
                    type="text" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label>Email *</label>
                <input 
                    placeholder="ejemplo@ejemplo.com" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}