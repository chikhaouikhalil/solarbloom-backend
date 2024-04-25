const Plants = [
  {
    type: "fruit",
    name: "Apple",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/apple.webp?alt=media&token=4aa49ea5-71e8-46c8-97ae-bef4bd57d233",
  },
  {
    type: "fruit",
    name: "Blueberry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/blueberry.webp?alt=media&token=7be98781-636d-4423-bbf9-9af30ecf4e2e",
  },
  {
    type: "fruit",
    name: "Cherry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/cherry.webp?alt=media&token=06af99ad-b3da-4683-9c02-ad8a706c27a7",
  },
  {
    type: "vegetable",
    name: "Corn",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/corn.webp?alt=media&token=bfb4b513-4bff-4059-816a-ea0a84feb214",
  },
  {
    type: "fruit",
    name: "Grape",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/grape.webp?alt=media&token=d801fab3-0841-4b2e-9099-245c39f206a4",
  },
  {
    type: "fruit",
    name: "Peach",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/peach.webp?alt=media&token=e6ee1a48-ed7b-451d-a9f3-6cf580ce17c8",
  },
  {
    type: "vegetable",
    name: "Pepper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/pepper.webp?alt=media&token=b26c257c-f03d-45d6-9aaa-bf686015a353",
  },
  {
    type: "vegetable",
    name: "Potato",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/potato.webp?alt=media&token=e1d6836e-77b0-49e1-b5c4-5bc530d0f5b3",
  },
  {
    type: "fruit",
    name: "Raspberry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/raspberry.webp?alt=media&token=98340b76-8a9f-4e6f-beee-c1e9dae769f0",
  },
  {
    type: "vegetable",
    name: "Soybean",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/soybean.webp?alt=media&token=195e83ab-bb89-4c17-b479-43526cf9cd40",
  },
  {
    type: "vegetable",
    name: "Squash",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/squash.webp?alt=media&token=5e437038-84ee-4686-a34e-4a6a52275ffb",
  },
  {
    type: "fruit",
    name: "Strawberry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/strawberry.webp?alt=media&token=db64be3d-1e69-494f-89b6-11c82eca1aa2",
  },
  {
    type: "fruit",
    name: "Tomato",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/tomato.webp?alt=media&token=bf036e54-4d42-4606-a1d9-88a758aa552c",
  },
  {
    type: "herb",
    name: "Mint",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/mint.png?alt=media&token=c8c34d2b-1eca-4671-b3ef-91dd1c8bc575",
    description:
      "The tomato plant, scientifically known as Solanum lycopersicum, is a member of the nightshade family, native to western South America. Widely cultivated for its edible fruits, tomatoes are now a staple in various cuisines worldwide. These plants typically feature green, pinnately compound leaves and bear small yellow flowers that develop into round or oval-shaped fruits, ranging in color from red and orange to yellow and even purple. Tomatoes thrive in warm climates and are often grown in gardens, greenhouses, or as potted plants. They are rich in vitamins, particularly vitamin C, and are versatile in culinary applications, being used in salads, sauces, soups, and numerous other dishes.",
    soilImpact: "Light Feeder",
    species: "Lycopersicon esculentum",
    edibleParts: ["fruit"],
    plantingSeasons: ["Spring", "Late Spring to Early Summer", "Fall"],
    germination: {
      description:
        "Tomato seeds typically germinate within 5 to 10 days under optimal conditions. This is the initial stage where the seed develops into a seedling.",
      duration: {
        max: 10,
        min: 5,
        unit: "days",
      },
      rate: 0.75,
    },
    harvest: {
      duration: {
        max: 85,
        min: 60,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 1 / 2,
        min: 1 / 4,
        unit: "inch",
      },
      spacing: {
        max: 24,
        min: 18,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1,
      min: 1.5,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 29,
      min: 21,
      unit: "°C",
    },
    yield: {
      unit: "Grams/m3",
      value: 4882,
    },
    companion: [
      "Onions",
      "Lettuce",
      "Spinach",
      "Basil",
      "Parsley",
      "Peas",
      "Beans",
      "Carrots",
    ],
    combative: [
      "Broccoli",
      "Cabbage",
      "Kale",
      "Peppers",
      "Potatoes",
      "Corn",
      "Eggplant",
      "Sweet Potatoes",
    ],
    pests: ["Flea Beetles", "Hornworms", "Slugs and snails"],
    diseases: ["Anthracnose", "Bacterial leaf spot", "Late Blight", "Root Rot"],
    growth: { unit: "week", data: [0, 4, 6, 9, 12, 16, 20, 22, 24] },
    faq: [
      {
        id: "1",
        question: "How often should I water my tomato plants?",
        response:
          "Tomato plants generally need consistent moisture to thrive, but overwatering can lead to problems like root rot. Water your tomato plants deeply 2-3 times per week, ensuring the soil is moist but not waterlogged. Adjust watering frequency based on weather conditions and soil moisture levels.",
      },
      {
        id: "2",
        question:
          "What are the common pests and diseases that affect tomato plants, and how can I prevent or treat them?",
        response:
          "Common pests include aphids, whiteflies, hornworms, and tomato fruitworms, while diseases like blight, wilt, and leaf spot can also occur. To prevent infestations and diseases, practice crop rotation, maintain good air circulation, keep the garden clean, and use organic pesticides or fungicides when necessary.",
      },
      {
        id: "3",
        question: "When is the best time to plant tomatoes in my region?",
        response:
          "The best time to plant tomatoes varies depending on your region's climate. Generally, they are planted after the danger of frost has passed and the soil temperature consistently stays above 50°F (10°C). In temperate climates, this is typically in late spring, while in warmer regions, it could be earlier.",
      },
      {
        id: "4",
        question:
          "What are the different varieties of tomatoes available, and which ones are best suited for my climate or garden conditions?",
        response:
          "There are numerous tomato varieties, including cherry, beefsteak, heirloom, and determinate/indeterminate types. Choose varieties based on your climate (considering factors like heat tolerance and disease resistance) and preferences for flavor, size, and growth habit. Local gardening centers or agricultural extension offices can provide recommendations tailored to your area.",
      },
      {
        id: "5",
        question:
          "How do I support tomato plants as they grow, and what methods are most effective for staking or trellising?",
        response:
          "Supporting tomato plants helps prevent them from sprawling on the ground, reduces disease risk, and makes harvesting easier. Common methods include using stakes, cages, or trellises. Stake plants by driving sturdy stakes into the ground near each plant and tying the main stem to the stake as it grows. Alternatively, place wire cages around plants or train them up trellises or fences, securing branches with garden ties as needed. Choose a method based on the tomato variety and available space in your garden.",
      },
    ],
  },
  {
    type: "herb",
    name: "Basil",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/basil.png?alt=media&token=14376f89-99fc-4a3a-b794-5f0e200e2718",
    description:
      "The tomato plant, scientifically known as Solanum lycopersicum, is a member of the nightshade family, native to western South America. Widely cultivated for its edible fruits, tomatoes are now a staple in various cuisines worldwide. These plants typically feature green, pinnately compound leaves and bear small yellow flowers that develop into round or oval-shaped fruits, ranging in color from red and orange to yellow and even purple. Tomatoes thrive in warm climates and are often grown in gardens, greenhouses, or as potted plants. They are rich in vitamins, particularly vitamin C, and are versatile in culinary applications, being used in salads, sauces, soups, and numerous other dishes.",
    soilImpact: "Light Feeder",
    species: "Lycopersicon esculentum",
    edibleParts: ["fruit"],
    plantingSeasons: ["Spring", "Late Spring to Early Summer", "Fall"],
    germination: {
      description:
        "Tomato seeds typically germinate within 5 to 10 days under optimal conditions. This is the initial stage where the seed develops into a seedling.",
      duration: {
        max: 10,
        min: 5,
        unit: "days",
      },
      rate: 0.75,
    },
    harvest: {
      duration: {
        max: 85,
        min: 60,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 1 / 2,
        min: 1 / 4,
        unit: "inch",
      },
      spacing: {
        max: 24,
        min: 18,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1,
      min: 1.5,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 29,
      min: 21,
      unit: "°C",
    },
    yield: {
      unit: "Grams/m3",
      value: 4882,
    },
    companion: [
      "Onions",
      "Lettuce",
      "Spinach",
      "Basil",
      "Parsley",
      "Peas",
      "Beans",
      "Carrots",
    ],
    combative: [
      "Broccoli",
      "Cabbage",
      "Kale",
      "Peppers",
      "Potatoes",
      "Corn",
      "Eggplant",
      "Sweet Potatoes",
    ],
    pests: ["Flea Beetles", "Hornworms", "Slugs and snails"],
    diseases: ["Anthracnose", "Bacterial leaf spot", "Late Blight", "Root Rot"],
    growth: { unit: "week", data: [0, 4, 6, 9, 12, 16, 20, 22, 24] },
    faq: [
      {
        id: "1",
        question: "How often should I water my tomato plants?",
        response:
          "Tomato plants generally need consistent moisture to thrive, but overwatering can lead to problems like root rot. Water your tomato plants deeply 2-3 times per week, ensuring the soil is moist but not waterlogged. Adjust watering frequency based on weather conditions and soil moisture levels.",
      },
      {
        id: "2",
        question:
          "What are the common pests and diseases that affect tomato plants, and how can I prevent or treat them?",
        response:
          "Common pests include aphids, whiteflies, hornworms, and tomato fruitworms, while diseases like blight, wilt, and leaf spot can also occur. To prevent infestations and diseases, practice crop rotation, maintain good air circulation, keep the garden clean, and use organic pesticides or fungicides when necessary.",
      },
      {
        id: "3",
        question: "When is the best time to plant tomatoes in my region?",
        response:
          "The best time to plant tomatoes varies depending on your region's climate. Generally, they are planted after the danger of frost has passed and the soil temperature consistently stays above 50°F (10°C). In temperate climates, this is typically in late spring, while in warmer regions, it could be earlier.",
      },
      {
        id: "4",
        question:
          "What are the different varieties of tomatoes available, and which ones are best suited for my climate or garden conditions?",
        response:
          "There are numerous tomato varieties, including cherry, beefsteak, heirloom, and determinate/indeterminate types. Choose varieties based on your climate (considering factors like heat tolerance and disease resistance) and preferences for flavor, size, and growth habit. Local gardening centers or agricultural extension offices can provide recommendations tailored to your area.",
      },
      {
        id: "5",
        question:
          "How do I support tomato plants as they grow, and what methods are most effective for staking or trellising?",
        response:
          "Supporting tomato plants helps prevent them from sprawling on the ground, reduces disease risk, and makes harvesting easier. Common methods include using stakes, cages, or trellises. Stake plants by driving sturdy stakes into the ground near each plant and tying the main stem to the stake as it grows. Alternatively, place wire cages around plants or train them up trellises or fences, securing branches with garden ties as needed. Choose a method based on the tomato variety and available space in your garden.",
      },
    ],
  },
  {
    type: "herb",
    name: "Rosemary",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/rosemary.png?alt=media&token=81a4ce36-7b56-453c-b5bc-f8480d79afdc",
    description:
      "The tomato plant, scientifically known as Solanum lycopersicum, is a member of the nightshade family, native to western South America. Widely cultivated for its edible fruits, tomatoes are now a staple in various cuisines worldwide. These plants typically feature green, pinnately compound leaves and bear small yellow flowers that develop into round or oval-shaped fruits, ranging in color from red and orange to yellow and even purple. Tomatoes thrive in warm climates and are often grown in gardens, greenhouses, or as potted plants. They are rich in vitamins, particularly vitamin C, and are versatile in culinary applications, being used in salads, sauces, soups, and numerous other dishes.",
    soilImpact: "Light Feeder",
    species: "Lycopersicon esculentum",
    edibleParts: ["fruit"],
    plantingSeasons: ["Spring", "Late Spring to Early Summer", "Fall"],
    germination: {
      description:
        "Tomato seeds typically germinate within 5 to 10 days under optimal conditions. This is the initial stage where the seed develops into a seedling.",
      duration: {
        max: 10,
        min: 5,
        unit: "days",
      },
      rate: 0.75,
    },
    harvest: {
      duration: {
        max: 85,
        min: 60,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 1 / 2,
        min: 1 / 4,
        unit: "inch",
      },
      spacing: {
        max: 24,
        min: 18,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1,
      min: 1.5,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 29,
      min: 21,
      unit: "°C",
    },
    yield: {
      unit: "Grams/m3",
      value: 4882,
    },
    companion: [
      "Onions",
      "Lettuce",
      "Spinach",
      "Basil",
      "Parsley",
      "Peas",
      "Beans",
      "Carrots",
    ],
    combative: [
      "Broccoli",
      "Cabbage",
      "Kale",
      "Peppers",
      "Potatoes",
      "Corn",
      "Eggplant",
      "Sweet Potatoes",
    ],
    pests: ["Flea Beetles", "Hornworms", "Slugs and snails"],
    diseases: ["Anthracnose", "Bacterial leaf spot", "Late Blight", "Root Rot"],
    growth: { unit: "week", data: [0, 4, 6, 9, 12, 16, 20, 22, 24] },
    faq: [
      {
        id: "1",
        question: "How often should I water my tomato plants?",
        response:
          "Tomato plants generally need consistent moisture to thrive, but overwatering can lead to problems like root rot. Water your tomato plants deeply 2-3 times per week, ensuring the soil is moist but not waterlogged. Adjust watering frequency based on weather conditions and soil moisture levels.",
      },
      {
        id: "2",
        question:
          "What are the common pests and diseases that affect tomato plants, and how can I prevent or treat them?",
        response:
          "Common pests include aphids, whiteflies, hornworms, and tomato fruitworms, while diseases like blight, wilt, and leaf spot can also occur. To prevent infestations and diseases, practice crop rotation, maintain good air circulation, keep the garden clean, and use organic pesticides or fungicides when necessary.",
      },
      {
        id: "3",
        question: "When is the best time to plant tomatoes in my region?",
        response:
          "The best time to plant tomatoes varies depending on your region's climate. Generally, they are planted after the danger of frost has passed and the soil temperature consistently stays above 50°F (10°C). In temperate climates, this is typically in late spring, while in warmer regions, it could be earlier.",
      },
      {
        id: "4",
        question:
          "What are the different varieties of tomatoes available, and which ones are best suited for my climate or garden conditions?",
        response:
          "There are numerous tomato varieties, including cherry, beefsteak, heirloom, and determinate/indeterminate types. Choose varieties based on your climate (considering factors like heat tolerance and disease resistance) and preferences for flavor, size, and growth habit. Local gardening centers or agricultural extension offices can provide recommendations tailored to your area.",
      },
      {
        id: "5",
        question:
          "How do I support tomato plants as they grow, and what methods are most effective for staking or trellising?",
        response:
          "Supporting tomato plants helps prevent them from sprawling on the ground, reduces disease risk, and makes harvesting easier. Common methods include using stakes, cages, or trellises. Stake plants by driving sturdy stakes into the ground near each plant and tying the main stem to the stake as it grows. Alternatively, place wire cages around plants or train them up trellises or fences, securing branches with garden ties as needed. Choose a method based on the tomato variety and available space in your garden.",
      },
    ],
  },
];
