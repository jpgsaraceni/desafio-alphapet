import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { usePets } from '../../hooks/usePets';

import Header from '../../components/Header';
import { Container } from './styles';
import PetCard from '../../components/PetCard';

function PetList() {
    const { pets } = usePets();
    const history = useHistory();
    const [myPets, setMyPets] = useState(pets);

    function navigateToRegisterPet() {
        history.push(`/registerpet`);
    }

    useEffect(() => {
        setMyPets(pets);
    }, [pets]);

    return (
        <Container>
            <Header />
            <div className="button-container">
                <button
                    type="button"
                    className="register-pet-btn"
                    onClick={() => navigateToRegisterPet()}
                >
                    Cadastrar Pet
                </button>
            </div>
            {myPets.map(pet => (
                <PetCard pet={pet} key={pet.id} />
            ))}
        </Container>
    );
}

export default PetList;
