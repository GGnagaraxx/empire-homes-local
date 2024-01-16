const propertyData = [
    {
        id: 1,
        name: 'Sample Apartment1',
        type: 'Studio',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        location: 'Jollibee Sangandaan Caloocan City',
        imgUrl: 'https://picsum.photos/320/520',
        progress: 95,
        desc: 'Laborum est quis adipisicing voluptate sunt velit minim reprehenderit eiusmod tempor ex laborum laborum. Mollit sint et Lorem ut enim qui enim non in deserunt tempor. Ex anim tempor minim ullamco in quis dolore dolor dolore in id eiusmod labore exercitation.'
    },
    {
        id: 2,
        name: 'Sample Apartment2',
        location: 'Sample Location City',
        type: 'Studio',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 10,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 75,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 3,
        name: 'Sample Apartment3',
        location: 'Sample Location City',
        type: 'Duplex',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 15,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 85,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 4,
        name: 'Sample Apartment4',
        location: 'Sample Location City',
        type: 'Triplex',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 50,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 5,
        name: 'Sample Apartment5',
        location: 'Sample Location City',
        type: 'Alcove Studio',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 45,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 6,
        name: 'Sample Apartment6',
        location: 'Sample Location City',
        type: 'Convertible',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 20,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 7,
        name: 'Sample Apartment7',
        location: 'Sample Location City',
        type: 'Micro',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 17,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 30,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 8,
        name: 'Sample Apartment8',
        location: 'Sample Location City',
        type: 'Loft',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 20,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 10,
        desc: 'Laboris do nisi consequat eiusmod occaecat proident adipisicing esse. Elit velit duis proident reprehenderit qui veniam anim minim cillum officia eiusmod proident. Magna magna ullamco esse do officia dolor occaecat. Amet sit minim in commodo cillum ea minim esse. In culpa duis consectetur cillum veniam exercitation quis. Quis ipsum occaecat amet eiusmod. Excepteur tempor qui consequat fugiat ad cillum et pariatur magna quis fugiat. Esse amet veniam veniam culpa excepteur. Ex in culpa aliquip laboris laborum. Exercitation Lorem eiusmod minim in sunt ea sint.'
    },
    {
        id: 9,
        name: 'Sample Apartment 9',
        location: 'Sample Location City',
        type: 'Garden',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 2,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 75,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 10,
        name: 'Sample Apartment 10',
        location: 'Sample Location City',
        type: 'Penthouse',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 20,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 90,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 11,
        name: 'Sample Apartment 11',
        location: 'Sample Location City',
        type: 'Railroad',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 35,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 12,
        name: 'Sample Apartment 12',
        location: 'Sample Location City',
        type: 'High-Rise',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 55,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 13,
        name: 'Sample Apartment 13',
        location: 'Sample Location City',
        type: 'Mid-Rise',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 80,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 14,
        name: 'Sample Apartment 14',
        location: 'Sample Location City',
        type: 'Low-Rise',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 17,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 15,
        name: 'Sample Apartment 15',
        location: 'Sample Location City',
        type: 'Co-op',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 60,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },
    {
        id: 16  ,
        name: 'Sample Apartment 16',
        location: 'Sample Location City',
        type: 'Condo',
        minPrice: 1500000,
        maxPrice: 10000000,
        demand: 12,
        imgUrl: 'https://picsum.photos/320/520',
        progress: 70,
        desc: 'Aliqua aliquip non culpa cillum exercitation ad.'
    },

]

const propertyTypes = [
    {
        id: '0',
        type: 'Studio',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '1',
        type: 'Alcove Studio',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '2',
        type: 'Convertible',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '3',
        type: 'Micro',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '4',
        type: 'Loft',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '5',
        type: 'Garden',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '6',
        type: 'Penthouse',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '7',
        type: 'Railroad',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '8',
        type: 'Duplex',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '9',
        type: 'Triplex',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '10',
        type: 'High-Rise',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '11',
        type: 'Mid-Rise',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '12',
        type: 'Low-Rise',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '13',
        type: 'Co-op',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
    {
        id: '14',
        type: 'Condo',
        desc: 'Non deserunt incididunt id nostrud ut sunt aliquip mollit dolore mollit officia aliqua.'
    },
]

const blogData = [
    {
        id: 1,
        title: 'Sample Title 1',
        date: '11-13-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 2,
        title: 'Sample Title 2',
        date: '11-12-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 3,
        title: 'Sample Title 3',
        date: '11-09-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 4,
        title: 'Sample Title 4',
        date: '11-01-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 5,
        title: 'Sample Title 5',
        date: '11-10-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 6,
        title: 'Sample Title 6',
        date: '11-10-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 7,
        title: 'Sample Title 7',
        date: '11-05-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 8,
        title: 'Sample Title 8',
        date: '11-06-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 9,
        title: 'Sample Title 9',
        date: '11-08-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 10,
        title: 'Sample Title 10',
        date: '11-09-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 11,
        title: 'Sample Title 11',
        date: '11-13-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 12,
        title: 'Sample Title 12',
        date: '11-08-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 13,
        title: 'Sample Title 13',
        date: '11-09-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 14,
        title: 'Sample Title 14',
        date: '11-03-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 15,
        title: 'Sample Title 15',
        date: '11-02-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },
    {
        id: 16,
        title: 'Sample Title 16',
        date: '11-05-2022',
        imgUrl: 'https://picsum.photos/520/320',
        link: 'https://blog.hubspot.com/',
        summary: `Culpa fugiat ex sit nostrud proident. 
        Laborum nostrud consectetur veniam velit est culpa aliqua nulla 
        officia in commodo pariatur. Velit aliquip sunt cupidatat ipsum 
        sint in tempor deserunt commodo nulla eiusmod commodo nisi.`,
    },

]

const faqs = [
    {
        id: 1,
        question: "Is it possible to book a reservation?",
        answer: "Yes, please proceed to the buyer's guide page and fill up the reservation form."
    },
    {
        id: 2,
        question: "Can I apply as an agent or property consultant?",
        answer: "Yes, please proceed to the sellers's guide page and fill up the join us form."
    },
    {
        id: 3,
        question: "How to cancel a reservation?",
        answer: "Please contact us either through our phone number or email dedicated for buyers indicated in our contacts."
    },
]

export {
    propertyData,
    propertyTypes,
    blogData,
    faqs,
}