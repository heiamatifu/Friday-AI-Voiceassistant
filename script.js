
  // script.js

const output = document.getElementById("outputText");

const jokes = [ "Why don’t scientists trust atoms? Because they make up everything!", "I told my computer I needed a break, and it said ‘No problem — I’ll go to sleep.’", "Why did the scarecrow win an award? Because he was outstanding in his field!", "What do you call fake spaghetti? An impasta!", "Parallel lines have so much in common. It’s a shame they’ll never meet.", "Why don’t eggs tell jokes? They’d crack each other up.", "Why did the tomato turn red? Because it saw the salad dressing!", "What do you get when you cross a snowman and a vampire? Frostbite.", "What did one wall say to the other? I’ll meet you at the corner.", "I asked the dog what’s two minus two. He said nothing." ];

const facts = [ "Honey never spoils. Edible honey was found in ancient Egyptian tombs.", "Bananas are berries, but strawberries aren’t.", "Octopuses have three hearts and blue blood.", "Sharks are older than trees.", "Sloths can hold their breath longer than dolphins.", "The Eiffel Tower can grow 6 inches in summer heat.", "Humans share 60% of their DNA with bananas.", "The moon has moonquakes.", "Some cats are allergic to humans.", "A group of flamingos is called a 'flamboyance'." ];

const stories = [ "Once upon a time, a clever rabbit outsmarted a lion in a jungle.", "A kind girl who helped animals was granted a magical wish by a bird.", "A turtle and a rabbit raced – and the slow turtle won by being steady.", "A tiny ant saved a mighty elephant by calling friends to help.", "A lost robot learned emotions after meeting a friendly child.", "A magical fish granted three wishes to a poor fisherman.", "A star fell to Earth and became a little boy’s best friend.", "A brave puppy rescued his family from a fire.", "A lonely cloud painted rainbows to cheer others.", "A singing mouse won the forest’s talent show." ];

const recipes = [ "Maggi: Boil water, add noodles and tastemaker, cook for 2 mins.", "Poha: Soak poha, fry onions and mustard seeds, mix with turmeric and salt.", "Aloo Paratha: Stuff spiced mashed potatoes into dough, roll, and cook on tawa.", "Paneer Butter Masala: Cook paneer in buttery tomato-cream gravy.", "Chole Bhature: Boil chickpeas, cook with spices, serve with fried bhature.", "Masala Dosa: Make fermented batter, spread on tawa, add spiced potato filling.", "Upma: Roast rava, cook with mustard seeds, onions, and veggies.", "Rajma Chawal: Cook rajma in tomato gravy, serve with rice.", "Fried Rice: Stir-fry rice with vegetables, garlic, and soy sauce.", "Biryani: Layer spiced rice with marinated veggies/meat, cook on low heat." ];

const gk = [ "Mount Everest is the tallest mountain on Earth.", "The Nile is the longest river in the world.", "The human body has 206 bones.", "Neil Armstrong was the first person on the moon.", "Cheetah is the fastest land animal.", "Water freezes at 0°C.", "India’s national bird is the peacock.", "The capital of Japan is Tokyo.", "Australia is the smallest continent.", "Light travels faster than sound." ];

const greetings = [ "Hi there! How can I help you today?", "Hello! Ready when you are.", "Good to see you! What can I do for you?", "Hey! I'm here to assist you.", "Hola! ¿Cómo puedo ayudarte hoy?", "Bonjour! Que puis-je faire pour vous?", "Hallo! Wie kann ich helfen?", "Namaste! Main aapki sahayata ke liye hoon.", "Ciao! Come posso aiutarti?", "Olá! Em que posso ajudar?" ];

function speak(text) { const speech = new SpeechSynthesisUtterance(); speech.text = text; speech.rate = 1; speech.pitch = 1; window.speechSynthesis.speak(speech); }

function getResponse(input) { input = input.toLowerCase();

if (["hi", "hello", "hey", "hola", "bonjour", "namaste", "guten tag", "ciao", "ola"].some(greet => input.includes(greet))) { const greeting = greetings[Math.floor(Math.random() * greetings.length)]; speak(greeting); output.innerText = greeting; return; }

if (input.includes("joke")) { const joke = jokes[Math.floor(Math.random() * jokes.length)]; speak(joke); output.innerText = joke; } else if (input.includes("fact")) { const fact = facts[Math.floor(Math.random() * facts.length)]; speak(fact); output.innerText = fact; } else if (input.includes("story")) { const story = stories[Math.floor(Math.random() * stories.length)]; speak(story); output.innerText = story; } else if (input.includes("recipe") || input.includes("how to make") || input.includes("food")) { const recipe = recipes[Math.floor(Math.random() * recipes.length)]; speak(recipe); output.innerText = recipe; } else if (input.includes("gk") || input.includes("general knowledge") || input.includes("quiz")) { const fact = gk[Math.floor(Math.random() * gk.length)]; speak(fact); output.innerText = fact; } else if (input.includes("creator")) { const credit = "I was created by Mohd Atif Idrisi, a 16-year-old freelance software developer from Bareilly. Check out github.com/heiamatifu"; speak(credit); output.innerText = credit; } else { const defaultReply = "I’m sorry, I don’t know that yet. But I’ll learn it soon!"; speak(defaultReply); output.innerText = defaultReply; } }

function startListening() { const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)(); recognition.lang = "en-US"; recognition.start();

recognition.onresult = (event) => { const transcript = event.results[0][0].transcript; output.innerText = "You said: " + transcript; getResponse(transcript); }; }

document.getElementById("textInput")?.addEventListener("keypress", function (event) { if (event.key === "Enter") { getResponse(this.value); this.value = ""; } });

