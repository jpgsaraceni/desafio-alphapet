import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container } from './styles';
import { usePets } from '../../hooks/usePets';

function RegisterPet() {
    const [complete, setComplete] = useState();
    const [name, setName] = useState();
    const [weight, setWeight] = useState();
    const [species, setSpecies] = useState();
    const [age, setAge] = useState();
    const [breed, setBreed] = useState();
    const [pet, setPet] = useState();
    const { getPets } = usePets();

    useEffect(() => {
        setPet({ name, weight, species, age, breed });
    }, [name, weight, species, age, breed]);

    function postPet() {
        api.post(`/pet`, { ...pet, ownerId: 1 });
        getPets();
        setComplete(true);
    }

    return (
        <Container>
            <Header />
            <form>
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={event => {
                        setComplete(false);
                        setName(event.target.value);
                    }}
                />
                <input
                    type="number"
                    placeholder="Peso"
                    onChange={event => setWeight(event.target.value)}
                />
                <select
                    onChange={event => setSpecies(event.target.value)}
                    className="default"
                >
                    <option value="" disabled className="default">
                        Espécie
                    </option>
                    <option value="gato">Gato</option>
                    <option value="cachorro">Cachorro</option>
                </select>
                <input
                    type="number"
                    placeholder="Idade"
                    onChange={event => setAge(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Raça"
                    onChange={event => setBreed(event.target.value)}
                />
                <input type="img" placeholder="Foto" />
                <div className="button-container">
                    <button
                        type="button"
                        className="register-btn"
                        onClick={() => {
                            postPet();
                        }}
                    >
                        Cadastrar
                    </button>
                </div>
                {complete && <span>{name} foi cadastrado!</span>}
            </form>
        </Container>
    );
}

export default RegisterPet;
