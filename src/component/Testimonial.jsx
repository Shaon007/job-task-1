import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const clientList = [
  {
    name: 'Luffy',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://i.pinimg.com/736x/c1/6a/e4/c16ae41dcd29ca70be71b8c7a793e104.jpg',
  },
  {
    name: 'Alice Brown',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis non natus animi rerum harum, adipisci repellendus enim nesciunt. Et, placeat.',
    img: 'https://i.pinimg.com/736x/47/30/2d/47302dc5f79fdc44b90b5e479e60a8b7.jpg',
  },
  {
    name: 'Mark Green',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'https://i.pinimg.com/736x/6e/0c/34/6e0c349fad66715658ac83b5312ad5da.jpg',
  },
  {
    name: 'Eva Johnson',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat in quam facilisis aliquet.',
    img: 'https://i.pinimg.com/736x/51/c1/d3/51c1d32cb9c47c57815ce4d0c1e9a8b8.jpg',
  },
  {
    name: 'Tom White',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    img: 'https://i.pinimg.com/736x/c9/26/54/c92654f51926c675ea63f5ba4460941c.jpg',
  },
];

const Testimonial = () => {
  const [active, setactive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setactive(prev => {
        let next;
        do {
          next = Math.floor(Math.random() * clientList.length);
        } while (next === prev);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const getSidePosition = (index, total, side) => {
    const step = 100 / (Math.ceil(total / 4) + 1);
    const offset = (index % Math.ceil(total / 4)) + 1;
    switch (side) {
      case 'left':
        return {
          top: `${step * offset}%`, left: '5%'
        };
      case 'right':
        return { top: `${step * offset}%`, left: '85%' };
      case 'top':
        return { top: '5%', left: '95%' };
      default:
        return { top: '0%', left: '15%' };
    }
  };

  const sides = ['right', 'top', 'left'];

  return (
    <div className="w-11/12 flex flex-col items-center justify-center py-10 bg-white overflow-hidden object-contain">
      <h4 className="text-center text-sm font-semibold">Testimonials</h4>
      <h2 className="text-3xl font-bold mb-8">Clients Feedback</h2>

      <div className="relative w-full max-w-6xl h-[350px] mb-10 rounded-md">
        {clientList.map((client, i) => {
          const isActive = i === active;
          const size = isActive ? 'w-28 h-28' : 'w-16 h-16';
          const border = isActive
            ? 'border-2 border-purple-500 p-2'
            : 'border-2 border-white';
          const zIndex = isActive ? 50 : 10;

          let pos;
          if (isActive) {
            pos = { top: '50%', left: '50%' };
          } else {
            const groupIndex = i > active ? i - 1 : i;
            const side = sides[groupIndex % 4];
            pos = getSidePosition(groupIndex, clientList.length - 1, side);
          }

          return (
            <motion.img
              key={i}
              src={client.img}
              alt={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`rounded-full  object-cover absolute ${size} ${border} shadow-md transition-all`}
              style = {{
          top: pos.top,
          left: pos.left,
          transform: 'translate(-50%, -50%)',
          zIndex,
        }}
            />
        );
        })}
      </div>

      <motion.div
        key={clientList[active].name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-4xl mt-6"
      >
        <p className="text-gray-600 mb-2 italic">"{clientList[active].text}"</p>
        <h4 className="text-lg font-semibold">{clientList[active].name}</h4>
      </motion.div>
    </div>
  );
};
export default Testimonial;