export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  category: string;
  ageGroup: string;
  pages: BookPage[];
  pdfUrl?: string;
}

export interface BookPage {
  id: number;
  content: string;
  image?: string;
}

export const books: Book[] = [
  {
    id: "juha-pumpkin",
    title: "Juha and the Enormous Pumpkin",
    author: "Fatima Al-Zahra",
    coverImage: "/books/juha-pumpkin-cover.svg",
    description: "A delightful story about Juha and his adventures with an enormous pumpkin that teaches children about patience, creativity, and the value of helping others.",
    category: "Adventure",
    ageGroup: "5-8 years",
    pages: [
      {
        id: 1,
        content: "Once upon a time, in a small village near the mountains, there lived a kind and clever man named Juha. Juha loved to help his neighbors and was always thinking of new ways to solve problems.",
        image: "/books/juha-page1.svg"
      },
      {
        id: 2,
        content: "One sunny morning, Juha was walking through his garden when he noticed something very strange. In the corner of his vegetable patch, there was a pumpkin that was growing bigger and bigger every day!",
        image: "/books/juha-page2.svg"
      },
      {
        id: 3,
        content: "The pumpkin was so enormous that it was almost as tall as Juha himself! 'My goodness,' said Juha, scratching his head. 'This pumpkin is getting so big, I don't know what to do with it!'",
        image: "/books/juha-page3.svg"
      },
      {
        id: 4,
        content: "Juha thought and thought about what to do with his enormous pumpkin. He could make pumpkin soup, but that would feed the whole village for a month! He could make pumpkin bread, but he would need a giant oven!",
        image: "/books/juha-page4.svg"
      },
      {
        id: 5,
        content: "Then Juha had a brilliant idea! 'I know what I'll do,' he said with a smile. 'I'll share this pumpkin with everyone in the village. We can have a great big pumpkin feast together!'",
        image: "/books/juha-page5.svg"
      },
      {
        id: 6,
        content: "Juha went from house to house, inviting all his neighbors to come to his garden. 'Come see my enormous pumpkin!' he called. 'We're going to have a wonderful feast!'",
        image: "/books/juha-page6.svg"
      },
      {
        id: 7,
        content: "Soon, all the villagers gathered in Juha's garden. They were amazed by the size of the pumpkin! 'How did you grow such a big pumpkin?' they asked. 'With love and patience,' Juha replied with a twinkle in his eye.",
        image: "/books/juha-page7.svg"
      },
      {
        id: 8,
        content: "Together, the villagers worked to harvest the enormous pumpkin. They cut it into pieces and shared it with everyone. Some made pumpkin soup, others made pumpkin bread, and some even made pumpkin pie!",
        image: "/books/juha-page8.svg"
      },
      {
        id: 9,
        content: "That evening, the whole village celebrated with a wonderful feast. They ate delicious pumpkin dishes and told stories late into the night. Juha was happy because he had shared his good fortune with his friends.",
        image: "/books/juha-page9.svg"
      },
      {
        id: 10,
        content: "From that day on, Juha became known as the man who shared the enormous pumpkin. And every year, the villagers would gather in his garden to celebrate friendship, sharing, and the magic of growing things together.",
        image: "/books/juha-page10.svg"
      }
    ],
    pdfUrl: "/books/Juha-and-the-Enormous-Pumpkin.pdf"
  },
  {
    id: "sarah-mosque",
    title: "Sarah's First Visit to the Mosque",
    author: "Amina Hassan",
    coverImage: "/books/sarah-mosque-cover.svg",
    description: "Join Sarah as she experiences her first visit to the mosque with her family, learning about prayer, community, and the beauty of Islamic traditions.",
    category: "Educational",
    ageGroup: "4-7 years",
    pages: [
      {
        id: 1,
        content: "Sarah was very excited! Today was her first time going to the mosque with her family. She had heard so many wonderful things about the mosque from her parents and older sister.",
        image: "/books/sarah-page1.svg"
      },
      {
        id: 2,
        content: "Before leaving home, Sarah's mother helped her put on her beautiful hijab. 'The mosque is a special place where we pray and learn about Allah,' her mother explained gently.",
        image: "/books/sarah-page2.svg"
      },
      {
        id: 3,
        content: "When they arrived at the mosque, Sarah was amazed by its beautiful architecture. The tall minaret reached up to the sky, and the dome sparkled in the sunlight.",
        image: "/books/sarah-page3.svg"
      },
      {
        id: 4,
        content: "Inside the mosque, Sarah saw many people praying together. The atmosphere was peaceful and welcoming. She noticed how everyone was respectful and quiet.",
        image: "/books/sarah-page4.svg"
      },
      {
        id: 5,
        content: "Sarah's father showed her how to perform wudu, the ritual washing before prayer. 'We must be clean and pure when we pray,' he explained as he helped her wash her hands and face.",
        image: "/books/sarah-page5.svg"
      },
      {
        id: 6,
        content: "In the prayer hall, Sarah sat quietly with her family. She watched as everyone stood, bowed, and prostrated together in perfect harmony. It was like a beautiful dance of worship.",
        image: "/books/sarah-page6.svg"
      },
      {
        id: 7,
        content: "After prayer, Sarah met other children in the mosque. They played together in the courtyard and shared stories. Sarah felt like she had found a new family.",
        image: "/books/sarah-page7.svg"
      },
      {
        id: 8,
        content: "Before leaving, the imam gave Sarah a small gift - a beautiful prayer mat with her name embroidered on it. 'Welcome to our community, Sarah,' he said with a warm smile.",
        image: "/books/sarah-page8.svg"
      },
      {
        id: 9,
        content: "On the way home, Sarah told her family how much she loved the mosque. 'Can we come back next week?' she asked excitedly. Her parents smiled and nodded.",
        image: "/books/sarah-page9.svg"
      },
      {
        id: 10,
        content: "That night, Sarah said her bedtime prayers with her new prayer mat. She felt grateful for her wonderful first visit to the mosque and couldn't wait to return again.",
        image: "/books/sarah-page10.svg"
      }
    ]
  },
  {
    id: "omar-ramadan",
    title: "Omar's Ramadan Adventure",
    author: "Khalid Ahmed",
    coverImage: "/books/omar-ramadan-cover.svg",
    description: "Follow Omar as he learns about fasting, prayer, and the spirit of giving during the holy month of Ramadan.",
    category: "Religious",
    ageGroup: "6-9 years",
    pages: [
      {
        id: 1,
        content: "Omar was excited because Ramadan was starting tomorrow! His parents had explained that Ramadan is a special month when Muslims fast from sunrise to sunset.",
        image: "/books/omar-page1.svg"
      },
      {
        id: 2,
        content: "Early in the morning, before the sun rose, Omar's family gathered for suhoor, the pre-dawn meal. They ate dates, bread, and drank water to prepare for the day of fasting.",
        image: "/books/omar-page2.svg"
      },
      {
        id: 3,
        content: "During the day, Omar learned that fasting is not just about not eating or drinking. It's also about being kind, patient, and thinking about people who are less fortunate.",
        image: "/books/omar-page3.svg"
      },
      {
        id: 4,
        content: "In the afternoon, Omar helped his mother prepare iftar, the meal to break the fast. They made delicious dates, soup, and traditional dishes for the family.",
        image: "/books/omar-page4.svg"
      },
      {
        id: 5,
        content: "When the sun set, Omar's family gathered around the table. They said a special prayer and broke their fast with dates and water, just like the Prophet Muhammad (peace be upon him) did.",
        image: "/books/omar-page5.svg"
      },
      {
        id: 6,
        content: "After iftar, Omar's family went to the mosque for Taraweeh prayers. The mosque was filled with people praying together, and the atmosphere was peaceful and spiritual.",
        image: "/books/omar-page6.svg"
      },
      {
        id: 7,
        content: "One day, Omar saw a homeless person on the street. Remembering what he learned about helping others during Ramadan, he gave the person some of his allowance.",
        image: "/books/omar-page7.svg"
      },
      {
        id: 8,
        content: "As Ramadan continued, Omar felt stronger and more patient. He learned that fasting helped him understand what it's like to be hungry and appreciate the food he had.",
        image: "/books/omar-page8.svg"
      },
      {
        id: 9,
        content: "On the last day of Ramadan, Omar's family celebrated Eid al-Fitr. They wore their best clothes, visited friends and family, and gave gifts to children.",
        image: "/books/omar-page9.svg"
      },
      {
        id: 10,
        content: "Omar felt proud that he had completed his first Ramadan. He had learned about patience, kindness, and the importance of helping others. He couldn't wait for next year's Ramadan!",
        image: "/books/omar-page10.svg"
      }
    ]
  }
]; 