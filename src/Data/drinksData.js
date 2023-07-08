const drinksData = {
    intro: {
        title: 'Quench your thirst with',
        subtitle: 'Drinks',
        description: 'Explore our refreshing drink options to complement your meal!',
    },
    options: [
        { id: 1, name: 'Coca-Cola', price: { small: 1.99, medium: 2.49, large: 2.99 },  iceOptions: ['Ice', 'No Ice'], image: "/images/menu/drinks/coke.png"},
        { id: 2, name: 'Sprite', price: { small: 1.99, medium: 2.49, large: 2.99 },  iceOptions: ['Ice', 'No Ice'], image: "/images/menu/drinks/sprite.png"},
        { id: 3, name: 'Lemonade', price: { small: 2.49, medium: 2.99, large: 3.49 },  iceOptions: ['Ice', 'No Ice'],  image: "/images/menu/drinks/lemonade.png"},
    ],
};

export default drinksData