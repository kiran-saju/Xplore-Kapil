/* ============================================================
   XPLORE KAPIL — Data / Content
   ============================================================ */

const DATA = {
  stays: [
    { id:'s1', name:'Tide Line Cottage', category:'Homestay', tags:['couple','beach view','wifi','breakfast'], rating:4.8, reviews:34, price:3200, location:'Kapil beach road', image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', blurb:'A two-room cottage on the dune line, ten steps from the sand, with a private balcony built for watching the tide come in.' },
    { id:'s2', name:'Palm Row Family Resort', category:'Resort', tags:['family','pool','parking','breakfast'], rating:4.6, reviews:112, price:5800, location:'Kapil–Edava road', image:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop', blurb:'Multi-room cottages set around a shared pool and garden, with a kids\' play corner and easy parking for a family car.' },
    { id:'s3', name:'Backwater Nest', category:'Homestay', tags:['couple','solo','budget','wifi'], rating:4.7, reviews:58, price:2100, location:'Kapil backwater side', image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop', blurb:'Four quiet rooms facing the backwater, hammocks strung between coconut palms, and a host family that cooks by request.' },
    { id:'s4', name:'Sunset Point Homestay', category:'Homestay', tags:['couple','family','breakfast','beach view'], rating:4.9, reviews:76, price:3000, location:'Near Kapil bridge', image:'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop', blurb:'A rooftop dining table with the best unobstructed sunset in Kapil, and home-cooked Kerala meals included.' },
  ],
  food: [
    { id:'f1', name:'Amma\'s Seafood Shack', category:'Seafood', tags:['local','budget','romantic'], rating:4.8, price:'₹₹', location:'Kapil beach road', image:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', blurb:'Whatever the boats brought in that morning, grilled over coconut husk. No menu — just ask what\'s fresh.' },
    { id:'f2', name:'Tide & Thyme Café', category:'Café', tags:['couple','wifi','breakfast'], rating:4.6, price:'₹₹', location:'Near Kapil bridge', image:'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop', blurb:'Slow coffee and banana pancakes on a shaded deck, popular with early risers headed to the beach.' },
    { id:'f3', name:'Grandma\'s Kitchen', category:'Local', tags:['family','budget','local'], rating:4.7, price:'₹', location:'Kapil village centre', image:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop', blurb:'Home-style thali served on banana leaf, unlimited refills, exactly as a Kerala grandmother would insist on.' },
    { id:'f4', name:'The Fisherman\'s Table', category:'Seafood', tags:['romantic','couple'], rating:4.9, price:'₹₹₹', location:'Kapil beachfront', image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', blurb:'Candlelit tables in the sand and a seafood platter meant for two — the closest thing Kapil has to fine dining.' },
  ],
  activities: [
    { id:'a1', name:'Sunrise Kayaking', category:'Water', tags:['adventure','nature'], duration:'2 hrs', price:800, image:'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&h=400&fit=crop', blurb:'Paddle the calm backwater channel before the day heats up, guided by a local fisherman.' },
    { id:'a2', name:'Village Cycling Tour', category:'Nature', tags:['family','budget','nature'], duration:'3 hrs', price:600, image:'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop', blurb:'A slow ride through paddy fields and coconut gardens, ending at a canal-side breakfast stop.' },
    { id:'a3', name:'Sunset Yoga on the Beach', category:'Wellness', tags:['relaxation','romantic'], duration:'1 hr', price:500, image:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop', blurb:'An open-air session on the sand as the light turns gold, suitable for every level.' },
    { id:'a4', name:'Backwater Fishing Trip', category:'Water', tags:['nature','romantic'], duration:'2.5 hrs', price:1000, image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', blurb:'Go out with a local fishing family on a country boat, the way it\'s actually done here.' },
  ],
  localGuide: [
    { id:'g1', title:'Best Sunset Spot', tag:'Local Favourite', blurb:'Skip the crowded main beach — the rocky outcrop past Kapil bridge clears out fast and faces the sun dead-on.', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop' },
    { id:'g2', title:'Hidden Backwater Channel', tag:'Locals Only', blurb:'A tiny backwater channel behind the coconut grove near Edava, quiet enough that you\'ll likely have it to yourself.', image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop' },
    { id:'g3', title:'Best Local Breakfast', tag:'Don\'t Miss', blurb:'Puttu and kadala curry from the unnamed stall by the bus stand, open from 6am until it sells out.', image:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop' },
    { id:'g4', title:'Quiet Beach Walk', tag:'Local Favourite', blurb:'Walk fifteen minutes north past the last resort and the beach empties out almost completely.', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop' },
  ],
  essentials: [
    { name:'Kapil Pharmacy', category:'Pharmacy', location:'Kapil market road' },
    { name:'Coastal Care Clinic', category:'Hospital', location:'Kapil–Edava road, 2 km' },
    { name:'SBI ATM — Kapil Junction', category:'ATM', location:'Kapil main road' },
    { name:'Kapil Beach Police Aid Post', category:'Police', location:'Near Kapil beach entrance' },
  ],
  events: [
    { id:'ev1', name:'Kapil Beach Music Evening', date:'Every Saturday, 6:30pm', location:'Kapil beach amphitheatre', image:'https://images.unsplash.com/photo-1506157783151-5427a5a4c2b5?w=600&h=400&fit=crop' },
    { id:'ev2', name:'Backwater Boat Festival', date:'12–14 Dec', location:'Kapil backwater channel', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop' },
    { id:'ev3', name:'Onam Sadya Community Feast', date:'Onam week', location:'Kapil village centre', image:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop' },
  ],
};