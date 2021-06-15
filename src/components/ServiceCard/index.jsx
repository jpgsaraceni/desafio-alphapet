import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function ServiceCard({ service }) {
    const history = useHistory();

    function navigateToScheduleService() {
        history.push(`/schedule/${service.id}`);
    }

    return (
        <Container>
            <h1>{service.name}</h1>
            <img
                className="service-image"
                src={service.image}
                alt={`Imagem com utensílios utilizados em ${service.name}`}
            />
            <p>A partir de R$ {service.price},00</p>
            <button
                type="button"
                className="schedule-button"
                onClick={() => {
                    navigateToScheduleService();
                }}
            >
                Agendar
            </button>
        </Container>
    );
}

export default ServiceCard;
