export const newPlants = [
  {
    type: "fruit",
    name: "Apple",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/apple.webp?alt=media&token=4aa49ea5-71e8-46c8-97ae-bef4bd57d233",
    description:
      "Apple trees, scientifically known as Malus domestica, are one of the most widely cultivated tree fruits. They belong to the Rosaceae family and originate from Central Asia. Apple varieties range in size, color, and flavor, accommodating a wide range of climatic conditions but generally prefer temperate climates. These trees require a period of dormancy and chilling temperatures to produce fruit.",
    soilImpact: "Medium Feeder",
    species: "Malus domestica",
    edibleParts: ["fruit"],
    plantingSeasons: ["Late Winter to Early Spring"],
    germination: {
      description:
        "Apple trees are typically grown from grafted rootstocks rather than seeds to ensure the quality and characteristics of the fruit. Trees establish and begin to grow leaves within weeks of planting.",
      duration: {
        max: 8,
        min: 4,
        unit: "weeks",
      },
      rate: 0.65,
    },
    harvest: {
      duration: {
        max: 52,
        min: 20,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 2,
        min: 1,
        unit: "feet",
      },
      spacing: {
        max: 30,
        min: 15,
        unit: "feet",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 30,
      min: -5,
      unit: "°C",
    },
    humidity: {
      max: 80,
      min: 60,
      unit: "%",
    },
    yield: {
      unit: "bushels per tree",
      value: 20, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Garlic", "Chives", "Nasturtium", "Marigold"],
    combative: ["Potato", "Walnut"],
    pests: ["Codling Moth", "Apple Scab", "Aphids"],
    diseases: ["Fire Blight", "Powdery Mildew", "Cedar Apple Rust"],
    growth: { unit: "month", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    faq: [
      {
        id: "1",
        question: "How often should I water my apple trees?",
        response:
          "Apple trees need consistent moisture, especially during the growing season. Water them weekly, providing 1 to 2 inches per week, depending on weather conditions and soil moisture.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing apples?",
        response:
          "Apple trees thrive in full sun and prefer a well-drained, fertile soil with a pH between 6.0 and 7.0. They require cold winter periods for dormancy and effective fruiting.",
      },
      {
        id: "3",
        question: "When is the right time to harvest apples?",
        response:
          "The best time to harvest apples depends on the variety and local climate. Generally, apples are ready when they are fully colored and the flesh is firm but sweet. Most varieties mature from late summer through fall.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Blueberry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/blueberry.webp?alt=media&token=7be98781-636d-4423-bbf9-9af30ecf4e2e",
    description:
      "Blueberries, belonging to the genus Vaccinium, are perennial flowering plants with blue or purple berries. They are classified into three main types based on the fruiting season: highbush, lowbush, and hybrid half-high. Blueberries prefer acidic soil with a pH between 4.5 and 5.5. They are known for their antioxidant properties and are a popular fruit for fresh eating, cooking, and baking.",
    soilImpact: "Light Feeder",
    species: "Vaccinium spp.",
    edibleParts: ["fruit"],
    plantingSeasons: ["Early Spring"],
    germination: {
      description:
        "Blueberries typically grow from cuttings or are transplanted as young plants rather than from seed. They begin to establish within a few weeks after planting under optimal conditions.",
      duration: {
        max: 4,
        min: 2,
        unit: "weeks",
      },
      rate: 0.69,
    },
    harvest: {
      duration: {
        max: 20,
        min: 10,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 0.5,
        min: 0.5,
        unit: "inch",
      },
      spacing: {
        max: 6,
        min: 3,
        unit: "feet",
      },
    },
    sun: "Full Sun to Partial Shade",
    watering: {
      max: 1.5,
      min: 1,
      unit: "inch / week",
      frequency: "Twice a week",
    },
    temperature: {
      max: 25,
      min: -5,
      unit: "°C",
    },
    humidity: {
      max: 75,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "kilograms per plant",
      value: 2.5, // This value is an example; actual yields vary by variety and conditions
    },
    companion: ["Azalea", "Rhododendron", "Fir"],
    combative: ["Tomato"],
    pests: ["Birds", "Cherry Fruit Worm"],
    diseases: ["Powdery Mildew", "Botrytis Blight"],
    growth: { unit: "week", data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
    faq: [
      {
        id: "1",
        question: "How often should I water my blueberry plants?",
        response:
          "Blueberry plants need consistent moisture, especially during the growing season. Water them deeply twice a week, ensuring that the soil remains moist but well-drained.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing blueberries?",
        response:
          "Blueberries thrive in acidic soil with a pH of 4.5 to 5.5, full sun to partial shade, and cool to moderate temperatures. They require well-drained, fertile soil rich in organic matter.",
      },
      {
        id: "3",
        question: "When is the right time to harvest blueberries?",
        response:
          "Blueberries are ready to harvest when they are fully ripe and have reached a uniform blue color. The berries should easily come off the stem without tugging. Harvest typically occurs from 10 to 20 weeks after flowering, depending on the variety.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Cherry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/cherry.webp?alt=media&token=06af99ad-b3da-4683-9c02-ad8a706c27a7",
    description:
      "Cherry trees, belonging to the genus Prunus, are popular for their delicious fruits and beautiful spring blossoms. There are primarily two types of cherry trees: sweet cherries (Prunus avium) and sour cherries (Prunus cerasus). Sweet cherries grow best in temperate climates and are commonly eaten fresh, while sour cherries, which thrive in slightly colder climates, are often used in cooking and baking. Cherry trees require well-drained, fertile soil and benefit from full sun exposure.",
    soilImpact: "Medium Feeder",
    species: "Prunus avium, Prunus cerasus",
    edibleParts: ["fruit"],
    plantingSeasons: ["Early Spring"],
    germination: {
      description:
        "Cherry trees are typically grown from grafts rather than seeds to ensure fruit quality and reduce the growing time. Trees start to establish a few weeks after planting.",
      duration: {
        max: 4,
        min: 2,
        unit: "weeks",
      },
      rate: 0.72,
    },
    harvest: {
      duration: {
        max: 20,
        min: 16,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 2,
        min: 1,
        unit: "feet",
      },
      spacing: {
        max: 20,
        min: 15,
        unit: "feet",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1.5,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 30,
      min: -10,
      unit: "°C",
    },
    humidity: {
      max: 75,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "kilograms per tree",
      value: 50, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Garlic", "Nasturtium", "Rosemary"],
    combative: ["Brassicas", "Potato"],
    pests: ["Aphids", "Cherry Fruit Fly"],
    diseases: ["Powdery Mildew", "Black Knot"],
    growth: { unit: "month", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    faq: [
      {
        id: "1",
        question: "How often should I water my cherry trees?",
        response:
          "Cherry trees need regular watering to establish deep roots, especially in the first few years. Water them weekly, providing 1 to 1.5 inches per week, adjusting based on rainfall and soil conditions.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing cherry trees?",
        response:
          "Cherry trees thrive in full sun and require well-drained, fertile soil with a pH of 6.5 to 6.7. They need cold winters for dormancy and moderate summers for optimal fruit development.",
      },
      {
        id: "3",
        question: "When is the right time to harvest cherries?",
        response:
          "Cherries are typically ready for harvest in early to mid-summer, depending on the variety and climate. Fruit should be fully colored and firm, with a slight give when gently squeezed.",
      },
    ],
  },
  {
    type: "vegetable",
    name: "Corn",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/corn.webp?alt=media&token=bfb4b513-4bff-4059-816a-ea0a84feb214",
    description:
      "Corn, scientifically known as Zea mays, is a large grain plant native to the Americas. A staple food in many parts of the world, corn is grown primarily for its set of kernels borne on a cob, which is protected by a leafy stalk. Corn plants are tall annuals that thrive in warm weather and fertile, well-drained soil. They require a lot of sunlight and are often grown in rows to facilitate pollination, which is necessary for kernel development.",
    soilImpact: "Heavy Feeder",
    species: "Zea mays",
    edibleParts: ["kernels"],
    plantingSeasons: ["Late Spring"],
    germination: {
      description:
        "Corn seeds typically germinate within 7 to 10 days under optimal conditions, needing warm soil to ensure successful sprouting.",
      duration: {
        max: 10,
        min: 7,
        unit: "days",
      },
      rate: 0.95,
    },
    harvest: {
      duration: {
        max: 120,
        min: 90,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 2,
        min: 1,
        unit: "inch",
      },
      spacing: {
        max: 36,
        min: 12,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 32,
      min: 10,
      unit: "°C",
    },
    humidity: {
      max: 80,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "tons/hectare",
      value: 10, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Beans", "Squash", "Peas"],
    combative: ["Tomatoes"],
    pests: ["Corn Earworm", "Corn Borer"],
    diseases: ["Corn Smut", "Rust", "Leaf Blight"],
    growth: {
      unit: "week",
      data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    },
    faq: [
      {
        id: "1",
        question: "How often should I water my corn plants?",
        response:
          "Corn requires a lot of water, especially as it grows taller and during the flowering and kernel development stages. Aim for 1 to 2 inches per week, increasing in hot weather or sandy soils.",
      },
      {
        id: "2",
        question: "What are effective methods to improve corn yield?",
        response:
          "Proper spacing, ensuring adequate sunlight, frequent watering, and using nitrogen-rich fertilizers are key. Additionally, planting companion plants like beans can help fix nitrogen in the soil.",
      },
      {
        id: "3",
        question: "When is the best time to harvest corn?",
        response:
          "Corn is ready for harvest when the silks at the top of the cob turn brown and the kernels are plump and milky when punctured. This typically occurs 20 to 24 weeks after planting.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Grape",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/grape.webp?alt=media&token=d801fab3-0841-4b2e-9099-245c39f206a4",
    description:
      "Grapes, scientifically known as Vitis vinifera, are among the oldest cultivated fruits, with numerous varieties grown worldwide for wine, table consumption, and dried to make raisins. Grapevines are deciduous vines that thrive in temperate climates and require a long growing season. They are typically trained to grow on trellises to manage their vigorous growth and improve sun exposure, which is critical for fruit development.",
    soilImpact: "Medium Feeder",
    species: "Vitis vinifera",
    edibleParts: ["fruit"],
    plantingSeasons: ["Early Spring"],
    germination: {
      description:
        "Grapevines are usually propagated from cuttings or grafts rather than seeds, establishing root systems and beginning to leaf out within weeks of planting.",
      duration: {
        max: 6,
        min: 3,
        unit: "weeks",
      },
      rate: 0.81,
    },
    harvest: {
      duration: {
        max: 40,
        min: 30,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 0.5,
        min: 0.5,
        unit: "feet",
      },
      spacing: {
        max: 8,
        min: 6,
        unit: "feet",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1.5,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 35,
      min: -10,
      unit: "°C",
    },
    humidity: {
      max: 70,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "tons per acre",
      value: 5, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Rose", "Garlic", "Chives"],
    combative: ["Cabbage", "Peas"],
    pests: ["Leafhoppers", "Spider Mites", "Grape Moth"],
    diseases: ["Powdery Mildew", "Downy Mildew", "Botrytis"],
    growth: { unit: "month", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    faq: [
      {
        id: "1",
        question: "How often should I water my grapevines?",
        response:
          "Grapevines require about 1 to 1.5 inches of water per week, especially during the growing season. It's important to water deeply but infrequently to encourage deep root growth and stress the vines slightly to improve fruit quality.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing grapes?",
        response:
          "Grapes do best in full sun with well-drained soil, preferably with a slope to facilitate drainage and air movement. They require a long growing season and benefit from pruning to manage vine growth and improve fruit yield and quality.",
      },
      {
        id: "3",
        question: "When is the right time to harvest grapes?",
        response:
          "Grapes are ready for harvest based on their sugar content (Brix), which should be tested with a refractometer. Harvest timing varies widely depending on the grape variety and intended use (table grapes, raisins, or wine).",
      },
    ],
  },
  {
    type: "fruit",
    name: "Peach",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/peach.webp?alt=media&token=e6ee1a48-ed7b-451d-a9f3-6cf580ce17c8",
    description:
      "Peach trees, scientifically known as Prunus persica, are deciduous trees native to northwest China. They belong to the family Rosaceae and are cultivated widely for their juicy and flavorful fruits. Peaches thrive in temperate regions and require some winter chilling to produce fruit. The trees are known for their pink spring blossoms and can be grown in a variety of soil types, though they prefer well-drained, fertile soil.",
    soilImpact: "Medium Feeder",
    species: "Prunus persica",
    edibleParts: ["fruit"],
    plantingSeasons: ["Early Spring"],
    germination: {
      description:
        "Peach trees are typically propagated from grafts rather than seeds to ensure the quality and characteristics of the fruit. Trees start to establish within a few weeks of planting.",
      duration: {
        max: 6,
        min: 4,
        unit: "weeks",
      },
      rate: 0.72,
    },
    harvest: {
      duration: {
        max: 20,
        min: 15,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 2,
        min: 1,
        unit: "feet",
      },
      spacing: {
        max: 20,
        min: 15,
        unit: "feet",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1.5,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 30,
      min: -5,
      unit: "°C",
    },
    humidity: {
      max: 80,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "kilograms per tree",
      value: 50, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Garlic", "Onion", "Spinach", "Tarragon"],
    combative: ["Potato", "Tomato"],
    pests: ["Peach Tree Borer", "Aphids", "Japanese Beetles"],
    diseases: ["Leaf Curl", "Brown Rot", "Peach Scab"],
    growth: { unit: "month", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    faq: [
      {
        id: "1",
        question: "How often should I water my peach trees?",
        response:
          "Peach trees need consistent moisture, especially during fruit development. Water them weekly, providing 1 to 1.5 inches per week, adjusting based on weather conditions and soil moisture.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing peaches?",
        response:
          "Peach trees thrive in full sun and prefer well-drained, fertile soil with a neutral pH. They need a cold period during winter to break dormancy and promote healthy spring growth.",
      },
      {
        id: "3",
        question: "When is the right time to harvest peaches?",
        response:
          "Peaches are ready to harvest when the color changes from green to full yellow or red, depending on the variety, and the fruit gives slightly to touch. It’s best to taste a few to ensure optimal sweetness.",
      },
    ],
  },
  {
    type: "vegetable",
    name: "Pepper",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/pepper.webp?alt=media&token=b26c257c-f03d-45d6-9aaa-bf686015a353",
    description:
      "Peppers, scientifically known as Capsicum spp., belong to the nightshade family and include a wide range of varieties from sweet bell peppers to hot chilies. Peppers are perennials in tropical areas but are often grown as annuals in temperate climates. They require warm soil and long, warm growing seasons to fully mature and develop their characteristic flavors and heat levels. Peppers are valued for their vibrant colors and versatility in cooking.",
    soilImpact: "Medium Feeder",
    species: "Capsicum spp.",
    edibleParts: ["fruit"],
    plantingSeasons: ["Spring"],
    germination: {
      description:
        "Pepper seeds require warm conditions to germinate, typically sprouting within 10 to 14 days if kept at the right temperature.",
      duration: {
        max: 14,
        min: 10,
        unit: "days",
      },
      rate: 0.8,
    },
    harvest: {
      duration: {
        max: 150,
        min: 60,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 0.25,
        min: 0.25,
        unit: "inch",
      },
      spacing: {
        max: 18,
        min: 12,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequency: "Twice a week",
    },
    temperature: {
      max: 30,
      min: 18,
      unit: "°C",
    },
    humidity: {
      max: 70,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "kilograms per square meter",
      value: 5, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Basil", "Onions", "Spinach", "Carrots"],
    combative: ["Beans", "Kohlrabi"],
    pests: ["Aphids", "Spider Mites", "Thrips"],
    diseases: ["Bacterial Spot", "Powdery Mildew", "Mosaic Virus"],
    growth: { unit: "week", data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
    faq: [
      {
        id: "1",
        question: "How often should I water my pepper plants?",
        response:
          "Pepper plants require consistent watering, about 1 to 2 inches per week, depending on the weather conditions. They should be watered deeply at least twice a week to maintain moist but not waterlogged soil.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing peppers?",
        response:
          "Peppers thrive in full sun and warm temperatures, ideally between 18°C and 30°C. They benefit from rich, well-drained soil and regular feeding, especially once the plants start fruiting.",
      },
      {
        id: "3",
        question: "When is the right time to harvest peppers?",
        response:
          "Harvest times for peppers can vary greatly depending on the variety and desired ripeness. Generally, peppers can be picked as soon as they are a usable size but allowing them to mature on the plant often enhances their flavor and heat.",
      },
    ],
  },
  {
    type: "vegetable",
    name: "Potato",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/potato.webp?alt=media&token=e1d6836e-77b0-49e1-b5c4-5bc530d0f5b3",
    description:
      "Potatoes, scientifically known as Solanum tuberosum, are starchy tubers of the plant Solanum, part of the nightshade family. Originating from the Andean region of South America, potatoes are now cultivated worldwide in various climates. They grow best in cool temperatures and require well-drained, fertile soil with a pH of 5.0 to 6.0. Potatoes are typically grown from 'seed potatoes' which are pieces of potatoes with eyes or buds from which new plants can sprout.",
    soilImpact: "Heavy Feeder",
    species: "Solanum tuberosum",
    edibleParts: ["tubers"],
    plantingSeasons: ["Early Spring"],
    germination: {
      description:
        "Potatoes do not germinate as seeds do, but rather develop sprouts from seed potatoes. Under optimal conditions, sprouts appear within 2 to 3 weeks.",
      duration: {
        max: 3,
        min: 2,
        unit: "weeks",
      },
      rate: 0.88,
    },
    harvest: {
      duration: {
        max: 120,
        min: 90,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 6,
        min: 4,
        unit: "inch",
      },
      spacing: {
        max: 12,
        min: 8,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1.5,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 25,
      min: 7,
      unit: "°C",
    },
    humidity: {
      max: 85,
      min: 65,
      unit: "%",
    },
    yield: {
      unit: "tons/hectare",
      value: 20, // This value is an example; actual yields vary by variety and growing conditions.
    },
    companion: ["Beans", "Cabbage", "Corn", "Horseradish", "Marigold", "Peas"],
    combative: ["Tomato", "Raspberry", "Pumpkin", "Sunflower", "Cucumber"],
    pests: ["Colorado Potato Beetle", "Potato Blight"],
    diseases: ["Late Blight", "Early Blight", "Scab"],
    growth: { unit: "week", data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
    faq: [
      {
        id: "1",
        question: "How often should I water my potato plants?",
        response:
          "Potatoes require about 1 to 1.5 inches of water per week, especially during tuber formation and growth. Consistent moisture is key to avoiding growth interruptions that can cause tuber malformations.",
      },
      {
        id: "2",
        question:
          "What are effective strategies for preventing potato pests and diseases?",
        response:
          "Practicing crop rotation, using certified disease-free seed potatoes, and proper garden hygiene can help prevent most common diseases and pests. Additionally, timely use of fungicides and pesticides can control outbreaks.",
      },
      {
        id: "3",
        question: "When is the best time to harvest potatoes?",
        response:
          "Potatoes are usually ready to harvest when the foliage begins to die back. For new potatoes, harvest can be done as soon as the flowers start to drop.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Raspberry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/raspberry.webp?alt=media&token=98340b76-8a9f-4e6f-beee-c1e9dae769f0",
    description:
      "Raspberry plants, scientifically known as Rubus idaeus, are perennial with biennial stems (canes) that grow from a perennial root system. They are popular for their delicate fruit which is a composite of many tiny individual drupelets. Raspberries thrive in cool climates and need well-drained, fertile soil rich in organic matter. They are usually grown in rows and require support as the canes can become quite tall and heavy with fruit.",
    soilImpact: "Medium Feeder",
    species: "Rubus idaeus",
    edibleParts: ["fruit"],
    plantingSeasons: ["Early Spring"],
    germination: {
      description:
        "Raspberries are typically propagated from root cuttings or canes rather than seeds, establishing new plants that can fruit in the second year.",
      duration: {
        max: 4,
        min: 2,
        unit: "weeks",
      },
      rate: 0.68,
    },
    harvest: {
      duration: {
        max: 8,
        min: 4,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 0.5,
        min: 0.5,
        unit: "feet",
      },
      spacing: {
        max: 3,
        min: 2,
        unit: "feet",
      },
    },
    sun: "Full Sun to Partial Shade",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 25,
      min: -5,
      unit: "°C",
    },
    humidity: {
      max: 80,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "kilograms per square meter",
      value: 2, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Garlic", "Onion", "Tansy"],
    combative: ["Potatoes"],
    pests: ["Raspberry Beetle", "Spider Mites"],
    diseases: ["Botrytis", "Raspberry Cane Blight"],
    growth: { unit: "month", data: [0, 1, 2, 3, 4, 5, 6] },
    faq: [
      {
        id: "1",
        question: "How often should I water my raspberry plants?",
        response:
          "Raspberry plants require 1 to 2 inches of water per week, especially during fruiting season. It's important to keep the soil moist but not waterlogged.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing raspberries?",
        response:
          "Raspberries perform best in full sun to partial shade with well-drained, fertile soil. They prefer a cool climate and require some winter chilling to produce fruit.",
      },
      {
        id: "3",
        question: "When is the right time to harvest raspberries?",
        response:
          "Raspberries are ready to harvest when they are fully colored and detach easily from the receptacle. For most varieties, this occurs from early to mid-summer.",
      },
    ],
  },
  {
    type: "vegetable",
    name: "Soybean",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/soybean.webp?alt=media&token=195e83ab-bb89-4c17-b479-43526cf9cd40",
    description:
      "Soybean, scientifically known as Glycine max, is a species of legume native to East Asia. Widely grown for its edible beans, soybean is a critical global source of protein and oil. The plant features hairy, upright stems with trifoliate leaves and small, self-pollinating flowers. The seeds vary in color from yellow, green, brown, to black. Soybeans thrive in warm and humid conditions and require full sun for optimum growth.",
    soilImpact: "Medium Feeder",
    species: "Glycine max",
    edibleParts: ["seeds"],
    plantingSeasons: ["Spring"],
    germination: {
      description:
        "Soybean seeds typically germinate within 5 to 10 days under optimal conditions. They need warm soil to sprout effectively.",
      duration: {
        max: 10,
        min: 5,
        unit: "days",
      },
      rate: 0.9,
    },
    harvest: {
      duration: {
        max: 180,
        min: 120,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 1.5,
        min: 1,
        unit: "inch",
      },
      spacing: {
        max: 6,
        min: 2,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 30,
      min: 15,
      unit: "°C",
    },
    humidity: {
      max: 80,
      min: 60,
      unit: "%",
    },
    yield: {
      unit: "Kg/ha",
      value: 3000, // This is an example; adjust based on specific variety and conditions
    },
    companion: ["Corn", "Cucumber", "Cauliflower", "Potatoes"],
    combative: ["Garlic", "Onion"],
    pests: ["Aphids", "Bean Leaf Beetle", "Spider Mites"],
    diseases: ["Soybean Rust", "Stem Rot", "Leaf Blight"],
    growth: { unit: "week", data: [0, 4, 8, 12, 16, 20, 24, 28] },
    faq: [
      {
        id: "1",
        question: "How often should I water my soybean plants?",
        response:
          "Soybeans generally require about 1 to 2 inches of water per week, especially during pod filling and flowering stages, to maintain optimal growth and yield.",
      },
      {
        id: "2",
        question:
          "What are the common pests and diseases affecting soybeans, and how can I manage them?",
        response:
          "Common pests include aphids and bean leaf beetles, while diseases like soybean rust and stem rot are also prevalent. Using resistant varieties, crop rotation, and timely application of fungicides and insecticides can help manage these issues.",
      },
      {
        id: "3",
        question: "What are the best companion plants for soybeans?",
        response:
          "Corn and cucumbers are good companions for soybeans. They can help utilize space efficiently and may help deter some pests.",
      },
    ],
  },
  {
    type: "vegetable",
    name: "Squash",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/squash.webp?alt=media&token=5e437038-84ee-4686-a34e-4a6a52275ffb",
    description:
      "Squash, belonging to the Cucurbitaceae family, encompasses a variety of species under the genus Cucurbita, including zucchini, yellow squash, and winter squash. These plants are highly productive and are known for their sprawling vines and broad leaves, protecting their fruits which vary widely in shape, size, and color. Squash plants prefer warm soil and are sensitive to frost.",
    soilImpact: "Heavy Feeder",
    species: "Cucurbita spp.",
    edibleParts: ["fruit", "flowers"],
    plantingSeasons: ["Late Spring"],
    germination: {
      description:
        "Squash seeds germinate quickly, typically within a week under optimal conditions, with seedlings emerging vigorously.",
      duration: {
        max: 7,
        min: 3,
        unit: "days",
      },
      rate: 0.85,
    },
    harvest: {
      duration: {
        max: 120,
        min: 50,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 1,
        min: 0.5,
        unit: "inch",
      },
      spacing: {
        max: 48,
        min: 36,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 35,
      min: 18,
      unit: "°C",
    },
    humidity: {
      max: 70,
      min: 50,
      unit: "%",
    },
    yield: {
      unit: "Pounds per plant",
      value: 5, // This is an example; adjust based on specific variety and conditions
    },
    companion: ["Corn", "Nasturtium", "Marigold"],
    combative: ["Potatoes"],
    pests: ["Squash Bugs", "Cucumber Beetles", "Vine Borers"],
    diseases: ["Powdery Mildew", "Bacterial Wilt"],
    growth: { unit: "week", data: [0, 2, 4, 8, 12, 16, 20, 24] },
    faq: [
      {
        id: "1",
        question: "How often should I water my squash plants?",
        response:
          "Squash plants require consistent watering, especially during fruit development. Aim for about 1 to 2 inches of water per week, adjusting for rainfall and temperature conditions.",
      },
      {
        id: "2",
        question: "What are the best companions for squash in the garden?",
        response:
          "Good companions for squash include corn and marigolds, which help deter pests and improve growth conditions.",
      },
      {
        id: "3",
        question: "When is the best time to harvest squash?",
        response:
          "Harvest times for squash vary depending on the variety. Summer squash should be harvested when they are still small and tender, while winter squash can be left on the vine until the outer skin hardens.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Strawberry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/strawberry.webp?alt=media&token=db64be3d-1e69-494f-89b6-11c82eca1aa2",
    description:
      "Strawberry plants, scientifically known as Fragaria × ananassa, belong to the rose family and are known for their bright red, juicy, and sweet fruits. These perennial plants are widely appreciated for their flavor and commonly used in desserts, jams, and jellies. Strawberry plants have trifoliate leaves, white flowers with yellow centers, and are often grown as ground cover or in containers.",
    soilImpact: "Medium Feeder",
    species: "Fragaria × ananassa",
    edibleParts: ["fruit"],
    plantingSeasons: ["Early Spring"],
    germination: {
      description:
        "Strawberry plants typically propagate from runners rather than seeds and establish within a few weeks under optimal conditions.",
      duration: {
        max: 4,
        min: 2,
        unit: "weeks",
      },
      rate: 0.7,
    },
    harvest: {
      duration: {
        max: 16,
        min: 12,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 0.5,
        min: 0.25,
        unit: "inch",
      },
      spacing: {
        max: 18,
        min: 12,
        unit: "inch",
      },
    },
    sun: "Full Sun to Partial Shade",
    watering: {
      max: 1.5,
      min: 1,
      unit: "inch / week",
      frequency: "2-3 times per week",
    },
    temperature: {
      max: 26,
      min: 10,
      unit: "°C",
    },
    humidity: {
      max: 80,
      min: 60,
      unit: "%",
    },
    yield: {
      unit: "Grams/m2",
      value: 600, // This is an example; adjust based on specific variety and conditions
    },
    companion: ["Beans", "Lettuce", "Onions", "Spinach", "Thyme"],
    combative: ["Cabbage", "Cauliflower"],
    pests: ["Slugs", "Red Spider Mites", "Aphids"],
    diseases: ["Powdery Mildew", "Grey Mould", "Leaf Spot"],
    growth: { unit: "week", data: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
    faq: [
      {
        id: "1",
        question: "How often should I water my strawberry plants?",
        response:
          "Strawberry plants need consistent moisture but do not tolerate overwatering. Water them 2-3 times per week, more frequently in hotter temperatures, ensuring the soil is moist but well-drained.",
      },
      {
        id: "2",
        question:
          "What are effective methods to protect strawberry plants from pests?",
        response:
          "Use floating row covers to protect plants from insects, remove affected leaves, and keep the area weed-free. Organic pesticides can be used for severe infestations.",
      },
      {
        id: "3",
        question: "When is the best time to plant strawberries?",
        response:
          "The best time to plant strawberries is early spring when the risk of frost has passed and soil temperatures are starting to rise.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Tomato",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/tomato.webp?alt=media&token=bf036e54-4d42-4606-a1d9-88a758aa552c",
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
    humidity: {
      max: 80,
      min: 65,
      unit: "%",
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
    name: "Mint",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/mint.png?alt=media&token=c8c34d2b-1eca-4671-b3ef-91dd1c8bc575",
    description:
      "Mint, scientifically known as Mentha, is a genus of plants in the Lamiaceae family, known for its aromatic leaves. Mint is easy to grow and spreads rapidly over an area. It is commonly used in cooking, teas, and for its refreshing fragrance. Mint thrives in cool to temperate climates and prefers moist, well-drained soil with partial to full sun exposure.",
    soilImpact: "Light Feeder",
    species: "Mentha",
    edibleParts: ["leaves"],
    plantingSeasons: ["Spring"],
    germination: {
      description:
        "Mint typically propagates from root divisions or cuttings, rather than seeds, and establishes quickly under suitable conditions.",
      duration: {
        max: 2,
        min: 1,
        unit: "weeks",
      },
      rate: 0.92,
    },
    harvest: {
      duration: {
        max: 8,
        min: 4,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 0.25,
        min: 0.25,
        unit: "inch",
      },
      spacing: {
        max: 24,
        min: 18,
        unit: "inch",
      },
    },
    sun: "Full Sun to Partial Shade",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequency: "Weekly",
    },
    temperature: {
      max: 30,
      min: 0,
      unit: "°C",
    },
    humidity: {
      max: 90,
      min: 70,
      unit: "%",
    },
    yield: {
      unit: "grams per square meter",
      value: 200, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Cabbage", "Tomato", "Peas"],
    combative: ["Parsley"],
    pests: ["Spider Mites", "Aphids"],
    diseases: ["Mint Rust", "Powdery Mildew"],
    growth: { unit: "month", data: [0, 1, 2, 3, 4, 5, 6] },
    faq: [
      {
        id: "1",
        question: "How often should I water my mint plants?",
        response:
          "Mint plants require frequent watering to keep the soil consistently moist. Water at least once a week or more often during hot, dry periods.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing mint?",
        response:
          "Mint prefers cool to temperate climates, moist soil, and partial to full sun exposure. It can thrive in a wide range of soil types but prefers well-drained soils.",
      },
      {
        id: "3",
        question: "When is the right time to harvest mint?",
        response:
          "Mint can be harvested as soon as it has enough foliage to maintain growth. Regular harvesting encourages bushier growth and prevents the plant from becoming leggy.",
      },
    ],
  },
  {
    type: "herb",
    name: "Basil",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/basil.png?alt=media&token=14376f89-99fc-4a3a-b794-5f0e200e2718",
    description:
      "Basil, scientifically known as Ocimum basilicum, is a popular culinary herb from the mint family Lamiaceae. It is native to tropical regions from Central Africa to Southeast Asia but is now grown globally. Basil is known for its aromatic leaves, which are used fresh or dried to flavor various dishes, particularly in Italian cuisine. It requires warm, tropical climates and grows best in full sun and well-drained soil.",
    soilImpact: "Light Feeder",
    species: "Ocimum basilicum",
    edibleParts: ["leaves"],
    plantingSeasons: ["Late Spring"],
    germination: {
      description:
        "Basil seeds typically germinate quickly, especially in warm soil, sprouting within 5 to 10 days after planting.",
      duration: {
        max: 10,
        min: 5,
        unit: "days",
      },
      rate: 0.86,
    },
    harvest: {
      duration: {
        max: 12,
        min: 8,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 0.25,
        min: 0.25,
        unit: "inch",
      },
      spacing: {
        max: 12,
        min: 10,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1,
      min: 0.5,
      unit: "inch / week",
      frequency: "Twice a week",
    },
    temperature: {
      max: 30,
      min: 10,
      unit: "°C",
    },
    humidity: {
      max: 70,
      min: 40,
      unit: "%",
    },
    yield: {
      unit: "grams per plant",
      value: 200, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Tomato", "Peppers", "Oregano"],
    combative: ["Cucumber", "Rue"],
    pests: ["Japanese Beetles", "Slugs", "Aphids"],
    diseases: ["Basil Downy Mildew", "Fusarium Wilt"],
    growth: { unit: "week", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    faq: [
      {
        id: "1",
        question: "How often should I water my basil plants?",
        response:
          "Basil plants need consistent moisture and should be watered twice a week, allowing the soil to slightly dry out between waterings to prevent root rot.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing basil?",
        response:
          "Basil thrives in warm, sunny conditions. It prefers temperatures between 10°C and 30°C and enjoys full sun exposure for at least 6 to 8 hours a day.",
      },
      {
        id: "3",
        question: "When is the right time to harvest basil?",
        response:
          "Basil is best harvested in the morning when its essential oils are at their peak. For continual growth, regularly pick leaves from the tops of the plants.",
      },
    ],
  },
  {
    type: "herb",
    name: "Rosemary",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/rosemary.png?alt=media&token=81a4ce36-7b56-453c-b5bc-f8480d79afdc",
    description:
      "Rosemary, scientifically known as Rosmarinus officinalis, is a woody, perennial herb with fragrant evergreen needle-like leaves. It is native to the Mediterranean region and is commonly used in cooking, aromatic and medicinal applications. Rosemary prefers full sun and well-drained soil. It is drought-tolerant and thrives in a variety of environmental conditions but does not tolerate severe winter cold.",
    soilImpact: "Light Feeder",
    species: "Rosmarinus officinalis",
    edibleParts: ["leaves"],
    plantingSeasons: ["Spring"],
    germination: {
      description:
        "Rosemary is typically propagated from cuttings rather than seeds, as it grows more reliably this way. Cuttings take root within a few weeks under optimal conditions.",
      duration: {
        max: 6,
        min: 4,
        unit: "weeks",
      },
      rate: 0.79,
    },
    harvest: {
      duration: {
        max: 52,
        min: 40,
        unit: "weeks",
      },
    },
    planting: {
      depth: {
        max: 0.5,
        min: 0.5,
        unit: "inch",
      },
      spacing: {
        max: 36,
        min: 24,
        unit: "inch",
      },
    },
    sun: "Full Sun",
    watering: {
      max: 1,
      min: 0.5,
      unit: "inch / week",
      frequency: "Biweekly",
    },
    temperature: {
      max: 30,
      min: -5,
      unit: "°C",
    },
    humidity: {
      max: 60,
      min: 40,
      unit: "%",
    },
    yield: {
      unit: "grams per plant",
      value: 150, // This value is indicative; actual yields vary by variety and conditions
    },
    companion: ["Cabbage", "Beans", "Carrots", "Sage"],
    combative: ["Basil"],
    pests: ["Spider Mites", "Aphids"],
    diseases: ["Powdery Mildew", "Root Rot"],
    growth: { unit: "month", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    faq: [
      {
        id: "1",
        question: "How often should I water my rosemary plants?",
        response:
          "Rosemary requires minimal watering once established, as it is drought-resistant. Water biweekly or less frequently, depending on the weather and soil moisture.",
      },
      {
        id: "2",
        question: "What are the best conditions for growing rosemary?",
        response:
          "Rosemary thrives in full sun and well-drained soil. It prefers slightly alkaline conditions and can tolerate both hot and cold weather, though it needs protection from severe frosts.",
      },
      {
        id: "3",
        question: "When is the right time to harvest rosemary?",
        response:
          "Rosemary can be harvested as needed throughout the year. For the best flavor, harvest in the morning when the oils are concentrated. Frequent trimming helps to keep the plants healthy and productive.",
      },
    ],
  },
];
