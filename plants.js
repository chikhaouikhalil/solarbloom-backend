export const PLANTS = [
  {
    type: "vegetable",
    name: "Tomato plant",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/tomatoplant.png?alt=media&token=66ae8614-fe0e-4c0f-8dd2-0284131202b7",
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
    type: "vegetable",
    name: "Carrots",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/carrotsnew.png?alt=media&token=459e1ede-6ee4-466b-a28f-0aa901b94a74",
    description:
      "Carrots are biennial plants primarily grown for their edible taproots, which are rich in vitamins and beta-carotene. They belong to the Apiaceae family, commonly known as the parsley family. Carrot plants typically have feathery green foliage that emerges from a central rosette and can reach heights of 1 to 2 feet (30 to 60 centimeters) at maturity. The taproot, the edible part of the plant, varies in size, shape, and color depending on the variety, ranging from slender and cylindrical to stout and conical, with colors ranging from orange to purple, red, yellow, and white.",
    soilImpact: "Drainage",
    species: "Daucus carota",
    edibleParts: ["Roots"],
    plantingSeasons: ["Spring", "Fall"],
    germination: {
      description:
        "Carrot seeds typically germinate within a range of 10 to 21 days, depending on various factors such as soil temperature, moisture levels, and seed quality. During germination, the seed absorbs water and begins to sprout, sending out a tiny root (radicle) followed by the emergence of the seedling's first leaves. Optimal soil temperatures for carrot germination range from 50°F to 85°F (10°C to 29°C), with faster germination occurring at warmer temperatures.",
      duration: {
        max: 21,
        min: 10,
        unit: "days",
      },
      rate: 0.8,
    },
    harvest: {
      duration: {
        max: 80,
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
        max: 4,
        min: 2,
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
      max: 24,
      min: 13,
      unit: "°C",
    },
    yield: {
      unit: "Grams/m3",
      value: 13300,
    },
    companion: [
      "Lettuce",
      "Onions",
      "Radishes",
      "Chives",
      "Rosemary",
      "Marigolds",
    ],
    combative: ["Dill", "Parsnips", "Potatoes", "Tomatoes", "Celery", "Fennel"],
    pests: ["Flea Beetles", "Hornworms", "Slugs and snails"],
    diseases: [
      "Carrot Rust Fly",
      "Aphids",
      "Cutworms",
      "Wireworms",
      "Carrot Weevil",
      "Root-knot Nematodes",
    ],
    growth: { unit: "week", data: [0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 1.0, 1.1] },
    faq: [
      {
        id: "1",
        question: "How deep should I plant carrot seeds?",
        response:
          "Carrot seeds should be planted at a depth of about 1/4 to 1/2 inch (6 to 13 millimeters) in well-prepared soil. Planting too deep can delay germination, while planting too shallow may result in poor seedling emergence.",
      },
      {
        id: "2",
        question: "What is the best time to plant carrots?",
        response:
          "Carrots are cool-season crops that thrive in temperatures ranging from 55°F to 75°F (13°C to 24°C). They can be planted in early spring as soon as the soil can be worked or in late summer for a fall harvest.",
      },
      {
        id: "3",
        question: "How far apart should I space carrot seeds?",
        response:
          "Carrot seeds should be spaced about 2 to 4 inches (5 to 10 centimeters) apart within rows. Rows should be spaced approximately 12 to 18 inches (30 to 45 centimeters) apart to allow for proper root development and cultivation.",
      },
      {
        id: "4",
        question: "Do carrots require full sun?",
        response:
          "Yes, carrots prefer full sun, which means they need at least 6 to 8 hours of direct sunlight per day. Adequate sunlight promotes healthy foliage growth and root development.",
      },
      {
        id: "5",
        question: "How often should I water carrot plants?",
        response:
          "Carrot plants require consistent moisture to support healthy growth, especially during germination and root development. Water the plants evenly, aiming for about 1 to 1.5 inches (2.5 to 3.8 centimeters) of water per week, depending on weather conditions.",
      },
      {
        id: "6",
        question: "When are carrots ready for harvest?",
        response:
          "Carrots are typically ready for harvest 60 to 80 days after planting, depending on the variety and growing conditions. Harvest when the roots reach the desired size and color, gently loosening the soil around them to avoid damage.",
      },
    ],
  },
  {
    type: "vegetable",
    name: "Lettuce",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/lettuce.png?alt=media&token=c197664d-3ad8-45b6-82af-f4ba2afef652",
    description:
      "Lettuce is a popular leafy vegetable belonging to the Asteraceae family, commonly known as the daisy or sunflower family. It is widely cultivated for its succulent leaves, which are consumed raw in salads, sandwiches, and wraps, or cooked in various culinary dishes. Lettuce plants typically form rosettes of tender leaves with a mild, slightly sweet flavor and a crisp texture.",
    soilImpact: "Nutrient uptake",
    species: "Lactuca sativa",
    edibleParts: ["Leaves"],
    plantingSeasons: ["Spring", "Fall"],
    germination: {
      description:
        "Germination is the process by which a seed transforms into a seedling. For lettuce, the germination duration typically ranges from 7 to 14 days, although it can vary depending on factors such as temperature, moisture, and seed quality. Lettuce seeds have a relatively high germination rate, typically ranging from 80% to 90%, meaning that a large proportion of viable seeds will sprout under optimal conditions.",
      duration: {
        max: 14,
        min: 7,
        unit: "days",
      },
      rate: 0.85,
    },
    harvest: {
      duration: {
        max: 75,
        min: 40,
        unit: "days",
      },
    },
    planting: {
      depth: {
        max: 1 / 4,
        min: 1 / 8,
        unit: "inch",
      },
      spacing: {
        max: 12,
        min: 6,
        unit: "inch",
      },
    },
    sun: "Full sun to partial shade",
    watering: {
      max: 1,
      min: 1.5,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 24,
      min: 7,
      unit: "°C",
    },
    yield: {
      unit: "Grams/m3",
      value: 3100,
    },
    companion: [
      "Carrots",
      "Radishes",
      "Onions",
      "Herbs (such as dill, cilantro, and chives)",
      "Cucumbers",
      "Strawberries",
    ],
    combative: [
      "Cabbage",
      "Broccoli",
      "Cauliflower",
      "Brussels Sprouts",
      "Kohlrabi",
      "Celery",
    ],
    pests: [
      "Aphids",
      "Cutworms",
      "Flea Beetles",
      "Slugs",
      "Snails",
      "Leaf Miners",
    ],
    diseases: [
      "Downy Mildew",
      "Powdery Mildew",
      "Botrytis Rot",
      "Lettuce Mosaic Virus",
      "Septoria Leaf Spot",
      "Bacterial Soft Rot",
    ],
    growth: { unit: "week", data: [0, 0.75, 1.2, 1.5, 2, 2.7, 3, 3.7] },
    faq: [
      {
        id: "1",
        question: "How often should I water my lettuce plants?",
        response:
          "Lettuce plants require consistent moisture to thrive. Water them regularly, ensuring that the soil remains evenly moist but not waterlogged. Aim to provide about 1 to 1.5 inches of water per week, either through rainfall or irrigation, adjusting based on weather conditions and soil moisture levels.",
      },
      {
        id: "2",
        question: "When is the best time to harvest lettuce?",
        response:
          "Lettuce leaves can be harvested at any stage of growth, depending on your preference. For baby lettuce leaves, harvest when the leaves are small and tender, typically around 3 to 4 inches in length. For mature heads of lettuce, wait until the heads are firm and fully formed, usually about 45 to 75 days after planting.",
      },
      {
        id: "3",
        question: "How can I prevent lettuce from bolting?",
        response:
          "Lettuce tends to bolt (prematurely flower) in response to high temperatures or prolonged exposure to heat. To prevent bolting, plant lettuce in a location with partial shade or provide shade during the hottest part of the day. Additionally, select heat-tolerant lettuce varieties and plant them in the early spring or fall when temperatures are cooler.",
      },
      {
        id: "4",
        question:
          "What are some common pests and diseases that affect lettuce?",
        response:
          "Common pests that affect lettuce include aphids, slugs, snails, and flea beetles. Diseases such as downy mildew, powdery mildew, and lettuce mosaic virus can also pose problems. Practice good garden hygiene, monitor plants regularly for signs of pests or diseases, and use organic or chemical controls as needed to manage infestations.",
      },
      {
        id: "5",
        question: "Can I grow lettuce in containers?",
        response:
          "Yes, lettuce can be grown successfully in containers, making it an excellent choice for small gardens, balconies, or patios. Choose a container with good drainage and fill it with a well-draining potting mix. Plant lettuce seeds or seedlings according to spacing guidelines, and place the container in a location with adequate sunlight or partial shade. Keep the soil evenly moist, and fertilize regularly to support healthy growth.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Orange Tree",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/orange.png?alt=media&token=acd72536-1934-464c-acdb-e0c4339be3b7",
    description:
      "The orange tree (Citrus sinensis) is a small to medium-sized evergreen tree belonging to the Rutaceae family. It is widely cultivated for its sweet and juicy fruit, oranges, which are consumed fresh, juiced, or used in various culinary dishes and beverages. Orange trees are prized not only for their delicious fruit but also for their fragrant white flowers and attractive foliage, making them popular ornamental plants in gardens and landscapes.",
    soilImpact: "Fertility",
    species: "Citrus sinensis",
    edibleParts: ["Fruits"],
    plantingSeasons: ["Spring", "Fall"],
    germination: {
      description:
        "Germination for orange trees initiates when a viable orange seed absorbs moisture from the soil, triggering metabolic processes within the seed. The absorbed water activates enzymes that break down stored nutrients, primarily carbohydrates, into simpler forms, providing energy for the developing embryo.",
      duration: {
        max: 14,
        min: 7,
        unit: "days",
      },
      rate: 0.76,
    },
    harvest: {
      duration: {
        max: 12,
        min: 6,
        unit: "months",
      },
    },
    planting: {
      depth: {
        max: 1 / 2,
        min: 1 / 4,
        unit: "inch",
      },
      spacing: {
        max: 300,
        min: 180,
        unit: "inch",
      },
    },
    sun: "Full sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 29,
      min: 13,
      unit: "°C",
    },
    yield: {
      unit: "kg / tree",
      value: "22-181",
    },
    companion: [
      "Lavender",
      "Marigolds",
      "Nasturtiums",
      "Comfrey",
      "Chives",
      "Borage",
    ],
    combative: [
      "Black Walnut",
      "Eucalyptus",
      "Pine",
      "Cottonwood",
      "Redwood",
      "Bamboo",
    ],
    pests: [
      "Citrus Leafminer",
      "Citrus Whitefly",
      "Citrus Thrips",
      "Citrus Red Mite",
      "Aphids",
      "Scale Insects",
    ],
    diseases: [
      "Citrus Canker",
      "Citrus Greening (Huanglongbing)",
      "Citrus Tristeza Virus",
      "Citrus Black Spot",
      "Anthracnose",
      "Phytophthora Root Rot",
    ],

    growth: {
      unit: "month",
      data: [2, 7, 11, 26, 31, 75, 100, 112, 124, 126, 136, 146, 161],
    },
    faq: [
      {
        id: "1",
        question: "How often should I fertilize my orange trees?",
        response:
          "Orange trees benefit from regular fertilization to support healthy growth and fruit production. Apply a balanced fertilizer formulated specifically for citrus trees three times a year: in early spring, late spring, and early fall. Follow the manufacturer's instructions for application rates based on the tree's size and age.",
      },
      {
        id: "2",
        question: "When is the best time to prune orange trees?",
        response:
          "Pruning orange trees is typically done in late winter to early spring, just before new growth begins. Remove dead, diseased, or crossing branches, as well as any suckers or water sprouts. Additionally, thin out dense canopy areas to improve air circulation and light penetration, which promotes fruit development and overall tree health.",
      },
      {
        id: "3",
        question: "How do I protect my orange trees from pests and diseases?",
        response:
          "Regular monitoring for pests and diseases is essential for maintaining healthy orange trees. Implement integrated pest management (IPM) practices, including cultural controls such as proper sanitation, maintaining good soil health, and promoting beneficial insects. Additionally, consider using insecticidal soaps, horticultural oils, or botanical insecticides as needed, following label instructions carefully.",
      },
      {
        id: "4",
        question: "Why are my orange tree leaves turning yellow?",
        response:
          "Yellowing leaves on orange trees can indicate various issues, including nutrient deficiencies, water stress, pests, diseases, or environmental factors. Check soil moisture levels to ensure proper watering, and consider conducting a soil test to assess nutrient levels. Address any pest or disease issues promptly, and monitor environmental conditions such as temperature and sunlight exposure.",
      },
      {
        id: "5",
        question: "How do I know when oranges are ripe and ready for harvest?",
        response:
          "Oranges are typically ripe and ready for harvest when they reach their mature coloration, such as bright orange or yellow, depending on the variety. Test the fruit for firmness and sweetness, as ripe oranges should feel heavy for their size and have a sweet aroma. Avoid harvesting oranges too early, as they may not reach their full flavor and sweetness.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Lemon Tree",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/lemon.png?alt=media&token=4f39061c-9222-422f-b24b-acb6bd54bfa3",
    description:
      "Lemon trees (Citrus limon) are small to medium-sized evergreen trees belonging to the Rutaceae family. They are prized for their tart, acidic fruits, lemons, which are widely used in culinary applications, beverages, and household products. Lemon trees feature glossy green leaves, fragrant white flowers, and oval or oblong yellow fruits. They thrive in warm climates and are often grown in home gardens, orchards, and commercial groves.",
    soilImpact: "Draining",
    species: "Citrus sinensis",
    edibleParts: ["Fruits"],
    plantingSeasons: ["Spring", "Fall"],
    germination: {
      description:
        "Germination of lemon seeds typically takes between 14 to 21 days under optimal conditions. However, germination rates can vary depending on factors such as temperature, moisture, and seed viability.",
      duration: {
        max: 21,
        min: 14,
        unit: "days",
      },
      rate: 0.92,
    },
    harvest: {
      duration: {
        max: 36,
        min: 12,
        unit: "months",
      },
    },
    planting: {
      depth: {
        max: 1,
        min: 1 / 2,
        unit: "inch",
      },
      spacing: {
        max: 300,
        min: 180,
        unit: "inch",
      },
    },
    sun: "Full sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 29,
      min: 13,
      unit: "°C",
    },
    yield: {
      unit: "kg / tree",
      value: "50-200",
    },
    companion: ["Lavender", "Basil", "Mint", "Thyme", "Rosemary", "Marigolds"],
    combative: [
      "Black Walnut",
      "Eucalyptus",
      "Pine",
      "Cottonwood",
      "Redwood",
      "Bamboo",
    ],
    pests: [
      "Citrus Leafminer",
      "Citrus Whitefly",
      "Citrus Thrips",
      "Citrus Red Mite",
      "Aphids",
      "Scale Insects",
    ],
    diseases: [
      "Citrus Canker",
      "Citrus Greening (Huanglongbing)",
      "Citrus Tristeza Virus",
      "Citrus Black Spot",
      "Anthracnose",
      "Phytophthora Root Rot",
    ],
    growth: {
      unit: "month",
      data: [2, 7, 11, 26, 31, 75, 100, 112, 124, 126, 136, 146, 161],
    },
    faq: [
      {
        id: "1",
        question: "How often should I water my lemon tree?",
        response:
          "Lemon trees require regular watering to maintain adequate soil moisture for healthy growth and fruit production. Water deeply and evenly, ensuring that the soil is moist but not waterlogged. Water young trees more frequently, allowing the soil to dry slightly between waterings. Adjust watering frequency based on weather conditions and soil moisture levels.",
      },
      {
        id: "2",
        question: "When is the best time to fertilize my lemon tree?",
        response:
          "Fertilize lemon trees three times a year with a balanced fertilizer formulated for citrus trees. Apply fertilizer in early spring, late spring, and early fall to support growth and fruit production. Follow the manufacturer's instructions for application rates based on tree size and age. Avoid fertilizing in late fall or winter, as it may stimulate new growth that can be damaged by cold temperatures.",
      },
      {
        id: "3",
        question: "How can I protect my lemon tree from pests and diseases?",
        response:
          "Regular monitoring and proper care are essential for preventing pest and disease problems in lemon trees. Implement integrated pest management (IPM) practices, including cultural controls such as sanitation, pruning, and promoting beneficial insects. Monitor for signs of pests and diseases, and treat promptly with appropriate methods, such as biological controls or targeted pesticide applications, if necessary.",
      },
      {
        id: "4",
        question: "Why are the leaves on my lemon tree turning yellow?",
        response:
          "Yellowing leaves on lemon trees can indicate various issues, including nutrient deficiencies, water stress, pests, diseases, or environmental factors. Check soil moisture levels to ensure proper watering, and fertilize as needed to correct nutrient deficiencies. Monitor for pests and diseases, and address promptly. Consider environmental factors such as temperature, sunlight, and soil drainage, which can affect leaf color and health.",
      },
      {
        id: "5",
        question: "How do I know when lemons are ripe and ready for harvest?",
        response:
          "Lemons are typically ripe and ready for harvest when they reach their mature coloration, such as bright yellow or yellow-orange, depending on the variety. Test the fruit for firmness and size, as ripe lemons should feel heavy for their size and have a slight give when gently squeezed. Harvest lemons carefully to avoid damaging the fruit or branches, using pruning shears or scissors to cut the stems cleanly.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Peach Tree",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/peach.png?alt=media&token=e9c08d9e-e9ea-49b0-9559-22766d92c88d",
    description:
      "Lemon trees (Citrus limon) are small to medium-sized evergreen trees belonging to the Rutaceae family. They are prized for their tart, acidic fruits, lemons, which are widely used in culinary applications, beverages, and household products. Lemon trees feature glossy green leaves, fragrant white flowers, and oval or oblong yellow fruits. They thrive in warm climates and are often grown in home gardens, orchards, and commercial groves.",
    soilImpact: "Draining",
    species: "Citrus sinensis",
    edibleParts: ["Fruits"],
    plantingSeasons: ["Spring", "Fall"],
    germination: {
      description:
        "Germination of lemon seeds typically takes between 14 to 21 days under optimal conditions. However, germination rates can vary depending on factors such as temperature, moisture, and seed viability.",
      duration: {
        max: 21,
        min: 14,
        unit: "days",
      },
      rate: 0.92,
    },
    harvest: {
      duration: {
        max: 36,
        min: 12,
        unit: "months",
      },
    },
    planting: {
      depth: {
        max: 1,
        min: 1 / 2,
        unit: "inch",
      },
      spacing: {
        max: 300,
        min: 180,
        unit: "inch",
      },
    },
    sun: "Full sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 29,
      min: 13,
      unit: "°C",
    },
    yield: {
      unit: "kg / tree",
      value: "50-200",
    },
    companion: ["Lavender", "Basil", "Mint", "Thyme", "Rosemary", "Marigolds"],
    combative: [
      "Black Walnut",
      "Eucalyptus",
      "Pine",
      "Cottonwood",
      "Redwood",
      "Bamboo",
    ],
    pests: [
      "Citrus Leafminer",
      "Citrus Whitefly",
      "Citrus Thrips",
      "Citrus Red Mite",
      "Aphids",
      "Scale Insects",
    ],
    diseases: [
      "Citrus Canker",
      "Citrus Greening (Huanglongbing)",
      "Citrus Tristeza Virus",
      "Citrus Black Spot",
      "Anthracnose",
      "Phytophthora Root Rot",
    ],
    growth: {
      unit: "month",
      data: [2, 7, 11, 26, 31, 75, 100, 112, 124, 126, 136, 146, 161],
    },
    faq: [
      {
        id: "1",
        question: "How often should I water my lemon tree?",
        response:
          "Lemon trees require regular watering to maintain adequate soil moisture for healthy growth and fruit production. Water deeply and evenly, ensuring that the soil is moist but not waterlogged. Water young trees more frequently, allowing the soil to dry slightly between waterings. Adjust watering frequency based on weather conditions and soil moisture levels.",
      },
      {
        id: "2",
        question: "When is the best time to fertilize my lemon tree?",
        response:
          "Fertilize lemon trees three times a year with a balanced fertilizer formulated for citrus trees. Apply fertilizer in early spring, late spring, and early fall to support growth and fruit production. Follow the manufacturer's instructions for application rates based on tree size and age. Avoid fertilizing in late fall or winter, as it may stimulate new growth that can be damaged by cold temperatures.",
      },
      {
        id: "3",
        question: "How can I protect my lemon tree from pests and diseases?",
        response:
          "Regular monitoring and proper care are essential for preventing pest and disease problems in lemon trees. Implement integrated pest management (IPM) practices, including cultural controls such as sanitation, pruning, and promoting beneficial insects. Monitor for signs of pests and diseases, and treat promptly with appropriate methods, such as biological controls or targeted pesticide applications, if necessary.",
      },
      {
        id: "4",
        question: "Why are the leaves on my lemon tree turning yellow?",
        response:
          "Yellowing leaves on lemon trees can indicate various issues, including nutrient deficiencies, water stress, pests, diseases, or environmental factors. Check soil moisture levels to ensure proper watering, and fertilize as needed to correct nutrient deficiencies. Monitor for pests and diseases, and address promptly. Consider environmental factors such as temperature, sunlight, and soil drainage, which can affect leaf color and health.",
      },
      {
        id: "5",
        question: "How do I know when lemons are ripe and ready for harvest?",
        response:
          "Lemons are typically ripe and ready for harvest when they reach their mature coloration, such as bright yellow or yellow-orange, depending on the variety. Test the fruit for firmness and size, as ripe lemons should feel heavy for their size and have a slight give when gently squeezed. Harvest lemons carefully to avoid damaging the fruit or branches, using pruning shears or scissors to cut the stems cleanly.",
      },
    ],
  },
  {
    type: "fruit",
    name: "Apple Tree",
    image:
      "https://firebasestorage.googleapis.com/v0/b/solar-bloom.appspot.com/o/apple.png?alt=media&token=ed4961b0-189e-45a6-ae32-89a623fabf52",
    description:
      "Lemon trees (Citrus limon) are small to medium-sized evergreen trees belonging to the Rutaceae family. They are prized for their tart, acidic fruits, lemons, which are widely used in culinary applications, beverages, and household products. Lemon trees feature glossy green leaves, fragrant white flowers, and oval or oblong yellow fruits. They thrive in warm climates and are often grown in home gardens, orchards, and commercial groves.",
    soilImpact: "Draining",
    species: "Citrus sinensis",
    edibleParts: ["Fruits"],
    plantingSeasons: ["Spring", "Fall"],
    germination: {
      description:
        "Germination of lemon seeds typically takes between 14 to 21 days under optimal conditions. However, germination rates can vary depending on factors such as temperature, moisture, and seed viability.",
      duration: {
        max: 21,
        min: 14,
        unit: "days",
      },
      rate: 0.92,
    },
    harvest: {
      duration: {
        max: 36,
        min: 12,
        unit: "months",
      },
    },
    planting: {
      depth: {
        max: 1,
        min: 1 / 2,
        unit: "inch",
      },
      spacing: {
        max: 300,
        min: 180,
        unit: "inch",
      },
    },
    sun: "Full sun",
    watering: {
      max: 2,
      min: 1,
      unit: "inch / week",
      frequence: "Daily",
    },
    temperature: {
      max: 29,
      min: 13,
      unit: "°C",
    },
    yield: {
      unit: "kg / tree",
      value: "50-200",
    },
    companion: ["Lavender", "Basil", "Mint", "Thyme", "Rosemary", "Marigolds"],
    combative: [
      "Black Walnut",
      "Eucalyptus",
      "Pine",
      "Cottonwood",
      "Redwood",
      "Bamboo",
    ],
    pests: [
      "Citrus Leafminer",
      "Citrus Whitefly",
      "Citrus Thrips",
      "Citrus Red Mite",
      "Aphids",
      "Scale Insects",
    ],
    diseases: [
      "Citrus Canker",
      "Citrus Greening (Huanglongbing)",
      "Citrus Tristeza Virus",
      "Citrus Black Spot",
      "Anthracnose",
      "Phytophthora Root Rot",
    ],
    growth: {
      unit: "month",
      data: [2, 7, 11, 26, 31, 75, 100, 112, 124, 126, 136, 146, 161],
    },
    faq: [
      {
        id: "1",
        question: "How often should I water my lemon tree?",
        response:
          "Lemon trees require regular watering to maintain adequate soil moisture for healthy growth and fruit production. Water deeply and evenly, ensuring that the soil is moist but not waterlogged. Water young trees more frequently, allowing the soil to dry slightly between waterings. Adjust watering frequency based on weather conditions and soil moisture levels.",
      },
      {
        id: "2",
        question: "When is the best time to fertilize my lemon tree?",
        response:
          "Fertilize lemon trees three times a year with a balanced fertilizer formulated for citrus trees. Apply fertilizer in early spring, late spring, and early fall to support growth and fruit production. Follow the manufacturer's instructions for application rates based on tree size and age. Avoid fertilizing in late fall or winter, as it may stimulate new growth that can be damaged by cold temperatures.",
      },
      {
        id: "3",
        question: "How can I protect my lemon tree from pests and diseases?",
        response:
          "Regular monitoring and proper care are essential for preventing pest and disease problems in lemon trees. Implement integrated pest management (IPM) practices, including cultural controls such as sanitation, pruning, and promoting beneficial insects. Monitor for signs of pests and diseases, and treat promptly with appropriate methods, such as biological controls or targeted pesticide applications, if necessary.",
      },
      {
        id: "4",
        question: "Why are the leaves on my lemon tree turning yellow?",
        response:
          "Yellowing leaves on lemon trees can indicate various issues, including nutrient deficiencies, water stress, pests, diseases, or environmental factors. Check soil moisture levels to ensure proper watering, and fertilize as needed to correct nutrient deficiencies. Monitor for pests and diseases, and address promptly. Consider environmental factors such as temperature, sunlight, and soil drainage, which can affect leaf color and health.",
      },
      {
        id: "5",
        question: "How do I know when lemons are ripe and ready for harvest?",
        response:
          "Lemons are typically ripe and ready for harvest when they reach their mature coloration, such as bright yellow or yellow-orange, depending on the variety. Test the fruit for firmness and size, as ripe lemons should feel heavy for their size and have a slight give when gently squeezed. Harvest lemons carefully to avoid damaging the fruit or branches, using pruning shears or scissors to cut the stems cleanly.",
      },
    ],
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
