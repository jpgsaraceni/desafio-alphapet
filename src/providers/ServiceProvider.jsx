/* eslint-disable react/destructuring-assignment */
import React, { createContext } from 'react';

import play from '../assets/images/play.png';
import bath from '../assets/images/bath.png';
import walk from '../assets/images/walk.png';

export const ServiceContext = createContext({});

export const ServiceProvider = props => {
    // the services are stored in this provider, and not in the server, because they are static.
    const services = [
        {
            id: 1,
            name: 'banho',
            price: 30,
            image: bath,
            description:
                'Temos uma equipe altamente capacitada, com todos os nossos profissionais certificados pela AuAlpha EdTech. Utilizamos os melhores produtos de beleza pet, em um ambiente totalmente limpo e seguro para seu melhor amigo. Nossos equipamentos de última geração garantem o melhor resultado e menor estresse para o animal. Agende já!',
        },
        {
            id: 2,
            name: 'passeio',
            price: 20,
            image: walk,
            description:
                'Se o seu animalzinho está muito estressado por passar muito tempo dentro de casa, e você não tem tempo para andar com ele tanto quanto gostaria, nós temos a solução! Nossos funcionários são altamente capacitados e possuem anos de experiência lidando com animais! Agende já um passeio inesquecível para o seu melhor amigo! Em breve lançaremos pacotes mensais.',
        },
        {
            id: 3,
            name: 'brincadeira',
            price: 15,
            image: play,
            description:
                'Nossos colaboradores são recreadores certificados pela Universidade Obra do Cão. Traga seu animal para interagir com outros animais, ou para uma sessão VIP com um dos nossos recreadores. Temos os melhores brinquedos educativos, e aqui o seu cãozinho vai aprender brincando! Com isso, você voltará para casa com um animal mais calmo, educado e cansado, que vai deixar seus vizinhos dormirem.',
        },
    ];

    return (
        <ServiceContext.Provider value={{ services }}>
            {props.children}
        </ServiceContext.Provider>
    );
};
