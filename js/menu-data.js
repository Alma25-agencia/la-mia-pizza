// Datos del menú COMPLETO de La Mia Pizza
const menuData = {
    pizzas: [
        // Página 1 - Pizzas principales
        {name: "Cingles de Bertí", description: "Tomàquet, mozzarella, alfàbrega i orenga", price: 8.80},
        {name: "Riells", description: "Tomàquet, mozzarella, pernil york i orenga", price: 10.00},
        {name: "Tenes", description: "Tomàquet, mozzarella, xampinyons, girgoles i orenga", price: 11.20},
        {name: "Del Faí", description: "Tomàquet, mozzarella, xoriço picant, ceba i orenga", price: 11.60},
        {name: "Rieral", description: "Tomàquet, mozzarella, pebrot vermell, tonyina, olives verdes i orenga", price: 10.90},
        {name: "Manantials", description: "Tomàquet, mozzarella, bacó i orenga", price: 10.00},
        {name: "Font del Bou", description: "Tomàquet, mozzarella, pernil york, carxofes, xampinyons i orenga", price: 11.90},
        {name: "Can Carreres", description: "Tomàquet, mozzarella, tonyina, bacó i orenga", price: 11.90},
        {name: "Vall Blanca", description: "Tomàquet, mozzarella, gorgonzola, cabra, emmental, grana padano i orenga", price: 11.90},
        {name: "Turó", description: "Salsa carbonara, mozzarella, bacó, ceba caramel·litzada, ou i orenga", price: 11.60},
        {name: "Abadia", description: "Tomàquet, mozzarella, pinya natural, cues de gambes i orenga", price: 12.10},
        {name: "Vallès", description: "Tomàquet, mozzarella, carn picada, pollastre arrebossat, salsa barbacoa i orenga", price: 12.00},
        {name: "Sant Miquel", description: "Tomàquet, mozzarella, pernil ibèric, rúcula, grana padano i orenga", price: 13.50},
        {name: "Can Sapera", description: "Tomàquet, mozzarella, pepperoni i orenga", price: 11.90},
        {name: "Can Maspons", description: "Tomàquet, mozzarella, sobrassada mallorquina, ceba, olives negres, ou, mel i orenga", price: 12.00},
        
        // Página 2 - Pizzas adicionales
        {name: "Font Granada", description: "Tomàquet, mozzarella, carxofes, cues de gambes, pernil york i orenga", price: 12.00},
        {name: "Bigues", description: "Tomàquet, mozzarella, botifarra negro, botifarra blanca, girgoles, grana padano i orenga", price: 12.00},
        {name: "Puiggraciós", description: "Tomàquet, mozzarella, tomàquet marinat, cabra, crema balsàmico, fulles d'alfàbrega i orenga", price: 13.50},
        {name: "Gorc de Sant Jeroni", description: "Tomàquet, mozzarella, pebrot vermell escalivat, ceba, albergínia fornejada, anxoves i orenga", price: 12.90},
        {name: "El Regasol", description: "Tomàquet, mozzarella, pollastre arrebossat, cansalada curada, grana padano i orenga", price: 12.50},
        {name: "Castell de Montbui", description: "Tomàquet, mozzarella, tomàquet laminat, olives de kalamata, tomàquets xerry, rúcula, fulles d'alfàbrega i organo", price: 13.00},
        {name: "Can Barri", description: "Tomàquet, mozzarella, salmó fumat, olives negres, rúcula i orenga", price: 14.90},
        {name: "Camí de la Pineda", description: "Tomàquet, mozzarella, albergínia, carbassó, xampinyons, pebrot vermell escalivat, tomàquet verry, carxes, olives verdes, rúcula i orenga", price: 12.00},
        {name: "Saulons", description: "Tomàquet, mozzarella, bacó, pernil york, ceba caramel·litzada, ou i orenga", price: 12.00},
        {name: "El Castanyer", description: "Tomàquet, mozzarella, pernil york, pinya natural i orenga", price: 11.90},
        {name: "Can Traver", description: "Tomàquet, mozzarella, albergínia fornejada, pollastre arrebossat, emmental, grana padano i orenga", price: 14.50},
        {name: "Vallderròs", description: "Pesto, mozzarella, bacó, gorgonzola, nous, grana padano i orenga", price: 14.00},
        {name: "Can Fabrera", description: "Salsa tartufata, mozzarella, albergínia fornejada, tomàquet laminat, rúcula i orenga", price: 13.00},
        {name: "Mia", description: "Tomàquet, mozzarella, carn, ceba, pebrot vermell escalivat i orenga", price: 12.00}
    ],
    
    amanides: [
        {name: "Formatge de Cabra", description: "Enciam, formatge de cabra, tomàquets marinats, fruits secs i Modena", price: 8.50},
        {name: "Mia", description: "Enciam, pebrot vermell escalivat, mozzarella fresca, fruits secs i oli d'alfàbrega", price: 8.50},
        {name: "Caprese", description: "Enciam, mozzarella fresca, tomàquet, oli alfàbrega i fruits secs", price: 8.50}
    ],

    crestes: [
        {name: "4 Formatges", description: "Pollastre", price: 3.10},
        {name: "Carn", description: "", price: 3.10},
        {name: "Carn Picant", description: "", price: 3.10},
        {name: "Albergínia amb Formatge de Cabra", description: "", price: 3.10},
        {name: "Pernil York i Formatge", description: "", price: 3.10},
        {name: "Pulled Pork", description: "", price: 3.10}
    ],
    
    tapes: [
        {name: "Patates Braves", description: "", price: 4.50},
        {name: "Rollets de Formatge", description: "", price: 4.90},
        {name: "Nuggets", description: "", price: 4.60},
        {name: "Mini Bombes de Pollastre", description: "", price: 4.90}
    ],
    
    postres: [
        {name: "Tiramisú", description: "", price: 4.50},
        {name: "Cheesecake", description: "", price: 4.50},
        {name: "Rollets de Xocolata", description: "", price: 4.90},
        {name: "Calzone Nutella", description: "", price: 8.00}
    ],
    
    bebidas: [
        // Refrescos
        {name: "Coca Cola", description: "", price: 1.80, category: "refresco"},
        {name: "Coca Cola Zero", description: "", price: 1.90, category: "refresco"},
        {name: "Fanta Taronja", description: "", price: 1.80, category: "refresco"},
        {name: "Nestea", description: "", price: 1.90, category: "refresco"},
        
        // Cervezas
        {name: "Estrella Damm", description: "", price: 1.80, category: "cerveza"},
        {name: "Voll Damm", description: "", price: 1.90, category: "cerveza"},
        {name: "Damm Lemon", description: "", price: 1.90, category: "cerveza"},
        
        // Lambruscos
        {name: "Lambrusco Negre", description: "", price: 8.00, category: "vino"},
        {name: "Lambrusco Rosat", description: "", price: 8.00, category: "vino"},
        {name: "Moscato", description: "", price: 10.00, category: "vino"}
    ]
};