import React from 'react';

import { useService } from '../../hooks/useService';

import ServiceCard from '../ServiceCard';
import { Container } from './styles';

function HomeMain() {
    const { services } = useService();

    return (
        <Container>
            {services.map(service => (
                <ServiceCard service={service} key={service.id} />
            ))}
        </Container>
    );
}

export default HomeMain;
