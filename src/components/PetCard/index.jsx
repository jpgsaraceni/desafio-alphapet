import React from 'react';

import { usePets } from '../../hooks/usePets';

import { Container } from './styles';

function PetCard({ pet }) {
    const { removePet } = usePets();

    return (
        <Container>
            <div className="name">
                <h1>{pet.name}</h1>
            </div>
            <div className="info-section">
                <p>
                    <span className="tag">
                        {pet.species ? 'Espécie: ' : ''}
                    </span>
                    {pet.species}
                </p>
                <p>
                    <span className="tag">{pet.age ? 'Idade: ' : ''}</span>
                    {pet.age}
                    {pet.age ? ' anos' : ''}
                </p>
                <p>
                    <span className="tag">{pet.weight ? 'Peso: ' : ''}</span>
                    {pet.weight}
                </p>
                <p>
                    <span className="tag">{pet.breed ? 'Raça: ' : ''}</span>
                    {pet.breed}
                </p>
            </div>
            <div>
                <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => removePet(pet)}
                >
                    Remover
                </button>
            </div>
        </Container>
    );
}

export default PetCard;
