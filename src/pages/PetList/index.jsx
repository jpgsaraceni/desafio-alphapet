import React from 'react';
import { useHistory } from 'react-router-dom';

import { usePets } from '../../hooks/usePets';

import Header from '../../components/Header';
import { Container } from './styles';
import PetCard from '../../components/PetCard';

function PetList() {
    const { pets } = usePets();
    const history = useHistory();

    function navigateToRegisterPet() {
        history.push(`/registerpet`);
    }
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
            {pets.map(pet => (
                <PetCard pet={pet} key={pet.id} />
            ))}
        </Container>
    );
}

export default PetList;
