'use strict';

const GUESTLIST = [{
        firstName: 'Sarah',
        lastName: 'Seely',
        guests: [{
            firstName: 'Sam',
            lastName: ''
        }]
    },
    {
        firstName: 'Barbara',
        lastName: 'Krimgold',
        guests: [{
            firstName: 'Frederick',
            lastName: 'Krimgold'
        }]
    },
    {
        firstName: 'Frederick',
        lastName: 'Krimgold',
        guests: [{
            firstName: 'Barbara',
            lastName: 'Krimgold'
        }]
    },
    {
        firstName: 'Tatyana',
        lastName: 'Krimgold',
        guests: [{
            firstName: 'Max',
            lastName: 'Schanner'
        }]
    },
    {
        firstName: 'Max',
        lastName: 'Schanner',
        guests: [{
            firstName: 'Tatyana',
            lastName: 'Krimgold'
        }]
    },
    {
        firstName: 'Alexa',
        lastName: 'Gilroy',
        guests: [{
                firstName: 'Charlie',
                lastName: 'Gilroy'
            },
            {
                firstName: 'Val',
                lastName: 'Karpoff'
            },
            {
                firstName: 'Katya',
                lastName: 'Karpoff'
            }
        ]
    },
    {
        firstName: 'Charlie',
        lastName: 'Gilroy',
        guests: [{
                firstName: 'Alexa',
                lastName: 'Gilroy'
            },
            {
                firstName: 'Val',
                lastName: 'Karpoff'
            },
            {
                firstName: 'Katya',
                lastName: 'Karpoff'
            }
        ]
    },
    {
        firstName: 'Elizabeth',
        lastName: 'Kivimae',
        guests: [{
                firstName: 'Bea',
                lastName: 'Kivimae'
            },
            {
                firstName: 'Roan',
                lastName: 'Kivimae'
            }
        ]
    },
    {
        firstName: 'Kristina',
        lastName: 'Cohen',
        guests: [{
                firstName: 'Allan',
                lastName: 'Cohen'
            },
            {
                firstName: 'Julia',
                lastName: 'Cohen'
            },
            {
                firstName: 'Michael',
                lastName: 'Cohen'
            }
        ]
    },
    {
        firstName: 'Allan',
        lastName: 'Cohen',
        guests: [{
                firstName: 'Kristina',
                lastName: 'Cohen'
            },
            {
                firstName: 'Julia',
                lastName: 'Cohen'
            },
            {
                firstName: 'Michael',
                lastName: 'Cohen'
            }
        ]
    },
    {
        firstName: 'Douglass',
        lastName: 'Fleming',
        guests: [{
                firstName: 'Marley',
                lastName: 'Mueller'
            },
            {
                firstName: 'Max',
                lastName: 'Fleming'
            }
        ]
    },
    {
        firstName: 'Marley',
        lastName: 'Mueller',
        guests: [{
                firstName: 'Douglass',
                lastName: 'Fleming'
            },
            {
                firstName: 'Max',
                lastName: 'Fleming'
            }
        ]
    },
    {
        firstName: 'Dan',
        lastName: 'Krimgold',
        guests: [{
            firstName: 'Doris',
            lastName: 'Krimgold'
        }]
    },
    {
        firstName: 'Doris',
        lastName: 'Krimgold',
        guests: [{
            firstName: 'Dan',
            lastName: 'Krimgold'
        }]
    },
    {
        firstName: 'Bob',
        lastName: 'Ricks',
        guests: [{
            firstName: 'Mary',
            lastName: 'Ricks'
        }]
    },
    {
        firstName: 'Mary',
        lastName: 'Ricks',
        guests: [{
            firstName: 'Bob',
            lastName: 'Ricks'
        }]
    },
    {
        firstName: 'Allen',
        lastName: 'Ricks',
        guests: [{
                firstName: 'Kristina',
                lastName: 'Ricks'
            },
            {
                firstName: 'Ian',
                lastName: 'Ricks'
            },
            {
                firstName: 'Elise',
                lastName: 'Ricks'
            }
        ]
    },
    {
        firstName: 'Kristina',
        lastName: 'Ricks',
        guests: [{
                firstName: 'Allen',
                lastName: 'Ricks'
            },
            {
                firstName: 'Ian',
                lastName: 'Ricks'
            },
            {
                firstName: 'Elise',
                lastName: 'Ricks'
            }
        ]
    },
    {
        firstName: 'Michael',
        lastName: 'Ricks',
        guests: [{
                firstName: 'Julia',
                lastName: 'Ricks'
            },
            {
                firstName: 'Benjamin',
                lastName: 'Ricks'
            },
            {
                firstName: 'Charlotte',
                lastName: 'Ricks'
            },
            {
                firstName: 'Elisabeth',
                lastName: 'Ricks'
            },
            {
                firstName: 'Constantin',
                lastName: 'Ricks'
            }
        ]
    },
    {
        firstName: 'Courtney',
        lastName: 'Purchon',
        guests: [{
                firstName: 'Robbie',
                lastName: 'Guempel'
            },
            {
                firstName: 'Baby',
                lastName: 'Guempel'
            }
        ]
    },
    {
        firstName: 'Robbie',
        lastName: 'Guempel',
        guests: [{
                firstName: 'Courtney',
                lastName: 'Purchon'
            },
            {
                firstName: 'Baby',
                lastName: 'Guempel'
            }
        ]
    },
    {
        firstName: 'Gabrielle',
        lastName: 'Purchon',
        guests: [{
            firstName: 'Andrew',
            lastName: 'Knox'
        }]
    },
    {
        firstName: 'Wendy',
        lastName: 'Trezise',
        guests: [{
            firstName: 'Bill',
            lastName: 'Trezise'
        }]
    },
    {
        firstName: 'Bill',
        lastName: 'Trezise',
        guests: [{
            firstName: 'Wendy',
            lastName: 'Trezise'
        }]
    },
    {
        firstName: 'Molly',
        lastName: 'Trezise-Martin',
        guests: [{
                firstName: 'Greg',
                lastName: 'Martin'
            },
            {
                firstName: 'Gus',
                lastName: 'Trezise-Martin'
            },
            {
                firstName: 'Isla',
                lastName: 'Trezise-Martin'
            }
        ]
    },
    {
        firstName: 'Greg',
        lastName: 'Martin',
        guests: [{
                firstName: 'Molly',
                lastName: 'Trezise-Martin'
            },
            {
                firstName: 'Gus',
                lastName: 'Trezise-Martin'
            },
            {
                firstName: 'Isla',
                lastName: 'Trezise-Martin'
            }
        ]
    },
    {
        firstName: 'Carolyn',
        lastName: 'Fisk',
        guests: [{
            firstName: 'Brad',
            lastName: 'Fisk'
        }]
    },
    {
        firstName: 'Brad',
        lastName: 'Fisk',
        guests: [{
            firstName: 'Carolyn',
            lastName: 'Fisk'
        }]
    },
    {
        firstName: 'Susan',
        lastName: 'Fisk',
        guests: [{
            firstName: 'Plus',
            lastName: 'One'
        }]
    },
    {
        firstName: 'Maiken',
        lastName: 'Weise',
        guests: [{
            firstName: 'Paco',
            lastName: 'Lozano'
        }]
    },
    {
        firstName: 'Paco',
        lastName: 'Lozano',
        guests: [{
            firstName: 'Maiken',
            lastName: 'Weise'
        }]
    },
    {
        firstName: 'Brenna',
        lastName: 'Lynch',
        guests: [{
            firstName: 'Nate',
            lastName: 'Graves'
        }]
    },
    {
        firstName: 'Nate',
        lastName: 'Graves',
        guests: [{
            firstName: 'Brenna',
            lastName: 'Lynch'
        }]
    },
    {
        firstName: 'Ryan',
        lastName: 'de la Cruz',
        guests: [{
            firstName: 'Selene',
            lastName: 'Rosenberg'
        }]
    },
    {
        firstName: 'Selene',
        lastName: 'Rosenberg',
        guests: [{
            firstName: 'Ryan',
            lastName: 'de la Cruz'
        }]
    },
    {
        firstName: 'Susana',
        lastName: 'Kyrgos',
        guests: [{
            firstName: 'Elias',
            lastName: ''
        }]
    },
    {
        firstName: 'Chris',
        lastName: 'Kyrgos',
        guests: [{
            firstName: 'Chrys',
            lastName: 'Kyrgos'
        }]
    },
    {
        firstName: 'Chrys',
        lastName: 'Kyrgos',
        guests: [{
            firstName: 'Chris',
            lastName: 'Kyrgos'
        }]
    },
    {
        firstName: 'Elevine',
        lastName: 'Berge',
        guests: [{
            firstName: 'Noel',
            lastName: 'Chanyungco'
        }]
    },
    {
        firstName: 'Noel',
        lastName: 'Chanyungco',
        guests: [{
            firstName: 'Elevine',
            lastName: 'Berge'
        }]
    },
    {
        firstName: 'Lyndsey',
        lastName: 'Purchon',
        guests: [{
            firstName: 'Alex',
            lastName: 'Chickosky'
        }]
    },
    {
        firstName: 'Alex',
        lastName: 'Chickosky',
        guests: [{
            firstName: 'Lyndsey',
            lastName: 'Purchon'
        }]
    },
    {
        firstName: 'Chris',
        lastName: 'Johnson',
        guests: [{
            firstName: 'Andrea',
            lastName: 'Turini'
        }]
    },
    {
        firstName: 'Andrea',
        lastName: 'Turini',
        guests: [{
            firstName: 'Chris',
            lastName: 'Johnson'
        }]
    },
    {
        firstName: 'Sabrina',
        lastName: 'Harris',
        guests: [{
            firstName: 'Carl',
            lastName: 'Lundeholm'
        }]
    },
    {
        firstName: 'Carl',
        lastName: 'Lundeholm',
        guests: [{
            firstName: 'Sabrina',
            lastName: 'Harris'
        }]
    },
    {
        firstName: 'Nico',
        lastName: 'Calderon',
        guests: [{
            firstName: 'Amitis',
            lastName: 'Oskoui'
        }]
    },
    {
        firstName: 'Amitis',
        lastName: 'Oskoui',
        guests: [{
            firstName: 'Nico',
            lastName: 'Calderon'
        }]
    },
    {
        firstName: 'Elliott',
        lastName: 'Becker',
        guests: [{
            firstName: 'Ally',
            lastName: 'Shandell'
        }]
    },
    {
        firstName: 'Ally',
        lastName: 'Shandell',
        guests: [{
            firstName: 'Elliott',
            lastName: 'Becker'
        }]
    },
    {
        firstName: 'John',
        lastName: 'Conroy',
        guests: [{
            firstName: 'Claire',
            lastName: 'Conroy'
        }]
    },
    {
        firstName: 'Claire',
        lastName: 'Conroy',
        guests: [{
            firstName: 'John',
            lastName: 'Conroy'
        }]
    },
    {
        firstName: 'Maggie',
        lastName: 'Conroy',
        guests: [{
            firstName: 'Chuck',
            lastName: 'Harper'
        }]
    },
    {
        firstName: 'Chuck',
        lastName: 'Harper',
        guests: [{
            firstName: 'Maggie',
            lastName: 'Conroy'
        }]
    },
    {
        firstName: 'Tim',
        lastName: 'Haasis',
        guests: [{
            firstName: 'Aimee',
            lastName: 'Wilkinson'
        }]
    },
    {
        firstName: 'Aimee',
        lastName: 'Wilkinson',
        guests: [{
            firstName: 'Tim',
            lastName: 'Haasis'
        }]
    },
    {
        firstName: 'Kelsey',
        lastName: 'Newsham',
        guests: [{
            firstName: 'Matt',
            lastName: 'Newsham'
        }]
    },
    {
        firstName: 'Matt',
        lastName: 'Newsham',
        guests: [{
            firstName: 'Kelsey',
            lastName: 'Newsham'
        }]
    },
    {
        firstName: 'Nozomi',
        lastName: 'Krapfl',
        guests: [{
            firstName: 'Ryan',
            lastName: 'Krapfl'
        }]
    },
    {
        firstName: 'Ryan',
        lastName: 'Krapfl',
        guests: [{
            firstName: 'Nozomi',
            lastName: 'Krapfl'
        }]
    },
    {
        firstName: 'Karl',
        lastName: 'Stefanski',
        guests: [{
            firstName: 'Megan',
            lastName: 'Stefanski'
        }]
    },
    {
        firstName: 'Megan',
        lastName: 'Stefanski',
        guests: [{
            firstName: 'Karl',
            lastName: 'Stefanski'
        }]
    },
    {
        firstName: 'Chuck',
        lastName: 'Chrittendon',
        guests: [{
            firstName: 'Emily',
            lastName: 'Marie'
        }]
    },
    {
        firstName: 'Emily',
        lastName: 'Marie',
        guests: [{
            firstName: 'Chuck',
            lastName: 'Chrittendon'
        }]
    },
    {
        firstName: 'Lydia',
        lastName: 'Franta',
        guests: [{
            firstName: 'Jeff',
            lastName: 'Franta'
        }]
    },
    {
        firstName: 'Jeff',
        lastName: 'Franta',
        guests: [{
            firstName: 'Lydia',
            lastName: 'Franta'
        }]
    },
    {
        firstName: 'Annie',
        lastName: 'Hobbs-Silva',
        guests: [{
            firstName: 'Abel',
            lastName: 'Ignacio'
        }]
    },
    {
        firstName: 'Abel',
        lastName: 'Ignacio',
        guests: [{
            firstName: 'Annie',
            lastName: 'Hobbs-Silva'
        }]
    },
    {
        firstName: 'Chris',
        lastName: 'Houska',
        guests: [{
            firstName: 'Kelsey',
            lastName: 'Houska'
        }]
    },
    {
        firstName: 'Kelsey',
        lastName: 'Houska',
        guests: [{
            firstName: 'Chris',
            lastName: 'Houska'
        }]
    },
    {
        firstName: 'Caitlin',
        lastName: 'Reeb',
        guests: [{
            firstName: 'Matt',
            lastName: 'Reeb'
        }]
    },
    {
        firstName: 'Matt',
        lastName: 'Reeb',
        guests: [{
            firstName: 'Caitlin',
            lastName: 'Reeb'
        }]
    },
    {
        firstName: 'Deanna',
        lastName: 'Cusick',
        guests: [{
            firstName: 'Sean',
            lastName: 'Cusick'
        }]
    },
    {
        firstName: 'Sean',
        lastName: 'Cusick',
        guests: [{
            firstName: 'Deanna',
            lastName: 'Cusick'
        }]
    },
    {
        firstName: 'Suzanne',
        lastName: 'Hirth',
        guests: [{
            firstName: 'Barry',
            lastName: 'Hirth'
        }]
    },
    {
        firstName: 'Barry',
        lastName: 'Hirth',
        guests: [{
            firstName: 'Suzanne',
            lastName: 'Hirth'
        }]
    },
    {
        firstName: 'Barclay',
        lastName: 'Hirth',
        guests: [{
                firstName: 'Jessica',
                lastName: 'Milward'
            },
            {
                firstName: 'Elliott',
                lastName: ''
            },
            {
                firstName: 'Oscar',
                lastName: ''
            }
        ]
    },
    {
        firstName: 'Jessica',
        lastName: 'Milward',
        guests: [{
                firstName: 'Barclay',
                lastName: 'Hirth'
            },
            {
                firstName: 'Elliott',
                lastName: ''
            },
            {
                firstName: 'Oscar',
                lastName: ''
            }
        ]
    },
    {
        firstName: 'Colin',
        lastName: 'Hirth',
        guests: [{
            firstName: 'Lexa',
            lastName: 'Hirth'
        }]
    },
    {
        firstName: 'Lexa',
        lastName: 'Hirth',
        guests: [{
            firstName: 'Colin',
            lastName: 'Hirth'
        }]
    },
    {
        firstName: 'Christine',
        lastName: 'Austin',
        guests: [{
                firstName: 'Dave',
                lastName: 'Austin'
            },
            {
                firstName: 'Emma',
                lastName: 'Austin'
            },
            {
                firstName: 'Douglas',
                lastName: 'Austin'
            }
        ]
    },
    {
        firstName: 'David',
        lastName: 'Austin',
        guests: [{
                firstName: 'Christine',
                lastName: 'Austin'
            },
            {
                firstName: 'Emma',
                lastName: 'Austin'
            },
            {
                firstName: 'Douglas',
                lastName: 'Austin'
            }
        ]
    },
    {
        firstName: 'Grant',
        lastName: 'Frankenfield',
        guests: [{
            firstName: 'Carl',
            lastName: 'Frankenfield'
        }]
    },
    {
        firstName: 'Carl',
        lastName: 'Frankenfield',
        guests: [{
            firstName: 'Grant',
            lastName: 'Frankenfield'
        }]
    },
    {
        firstName: 'Scott',
        lastName: 'Culshaw',
        guests: [{
            firstName: 'Cher',
            lastName: 'Culshaw'
        }]
    },
    {
        firstName: 'Cher',
        lastName: 'Culshaw',
        guests: [{
            firstName: 'Scott',
            lastName: 'Culshaw'
        }]
    },
    {
        firstName: 'Cher',
        lastName: 'Culshaw',
        guests: [{
            firstName: 'Scott',
            lastName: 'Culshaw'
        }]
    },
    {
        firstName: 'Neil',
        lastName: 'Elliott',
        guests: [{
            firstName: 'Rose',
            lastName: 'Elliott'
        }]
    },
    {
        firstName: 'Rose',
        lastName: 'Elliott',
        guests: [{
            firstName: 'Neil',
            lastName: 'Elliott'
        }]
    },
    {
        firstName: 'Ryan',
        lastName: 'Long',
        guests: [{
            firstName: 'Genie',
            lastName: 'Bush'
        }]
    },
    {
        firstName: 'Genie',
        lastName: 'Bush',
        guests: [{
            firstName: 'Ryan',
            lastName: 'Long'
        }]
    },
    {
        firstName: 'Casey',
        lastName: 'Miller',
        guests: [{
            firstName: 'Jeremy',
            lastName: 'Miller'
        }]
    },
    {
        firstName: 'Jeremy',
        lastName: 'Miller',
        guests: [{
            firstName: 'Casey',
            lastName: 'Miller'
        }]
    },
    {
        firstName: 'Marianne',
        lastName: 'Kozelka',
        guests: [{
            firstName: 'Ted',
            lastName: 'Kozelka'
        }]
    },
    {
        firstName: 'Ted',
        lastName: 'Kozelka',
        guests: [{
            firstName: 'Marianne',
            lastName: 'Kozelka'
        }]
    }
];

export default GUESTLIST;